import json
from flask import Flask, request, jsonify
import uuid
import os

app = Flask(__name__)


@app.route("/", methods=["GET"])
def query_records():
    return jsonify(read_records())


def read_records():
    filename = os.path.join(app.root_path,'data.json')
    with open(filename, "r") as f:
        return json.loads(f.read())


@app.route("/", methods=["PUT"])
def create_record():
    request_record = set_record_id(json.loads(request.data))
    records = read_records()
    records.append(request_record)
    write_records(records)
    return jsonify(request_record)


def set_record_id(request_record):
    request_record["id"] = str(uuid.uuid4())[:8]
    return request_record


def write_records(records):
    filename = os.path.join(app.root_path,'data.json')
    with open(filename, "w") as f:
        f.write(json.dumps(records, indent=2))


@app.route("/", methods=["POST"])
def update_record():
    request_record = json.loads(request.data)
    records = read_records()
    for idx, record in enumerate(records):
        if record["id"] == request_record["id"]:
            records[idx] = request_record
    write_records(records)
    return jsonify(request_record)


@app.route("/", methods=["DELETE"])
def delte_record():
    record_to_delte = json.loads(request.data)
    records = read_records()
    write_records(
        [record for record in records if record["id"] != record_to_delte["id"]]
    )
    return jsonify(record_to_delte)


if __name__ == "__main__":
    app.run(debug=True)
