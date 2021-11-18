import json
from flask import Flask, request, jsonify
import uuid
import os
from flask_cors import cross_origin
from datetime import datetime

app = Flask(__name__)


@app.route("/", methods=["GET"])
@cross_origin()
def query_records():
    return jsonify(read_records())


def read_records():
    with open(get_data_filename(), "r") as f:
        return json.loads(f.read())


def get_data_filename():
    return os.path.join(app.root_path, "data.json")


@app.route("/", methods=["PUT"])
@cross_origin()
def create_record():
    request_record = set_record_id(json.loads(request.data))
    request_record = set_timestamp(request_record)
    records = read_records()
    records.append(request_record)
    write_records(records)
    return jsonify(request_record)


def set_timestamp(record):
    record["created_at"] = str(datetime.now())
    return record


def set_record_id(request_record):
    request_record["id"] = str(uuid.uuid4())[:8]
    return request_record


def write_records(records):
    with open(get_data_filename(), "w") as f:
        f.write(json.dumps(records, indent=2))


@app.route("/", methods=["POST"])
@cross_origin()
def update_record():
    request_record = json.loads(request.data)
    request_record = set_timestamp(request_record)
    records = read_records()
    for idx, record in enumerate(records):
        if record["id"] == request_record["id"]:
            records[idx] = request_record
    write_records(records)
    return jsonify(request_record)


@app.route("/", methods=["DELETE"])
@cross_origin()
def delte_record():
    record_to_delte = json.loads(request.data)
    records = read_records()
    write_records(
        [record for record in records if record["id"] != record_to_delte["id"]]
    )
    return jsonify(record_to_delte)


if __name__ == "__main__":
    app.run(debug=True)
