initSidebarItems({"enum":[["BodySource","The Dom object, or ReadableStream, that is the source of a body. https://fetch.spec.whatwg.org/#concept-body-source"],["BodyType",""],["FetchedData",""],["StopReading","The reason to stop reading from the body."]],"fn":[["consume_body",""],["consume_body_with_promise",""],["run_array_buffer_data_algorithm",""],["run_blob_data_algorithm",""],["run_form_data_algorithm",""],["run_json_data_algorithm",""],["run_package_data_algorithm",""],["run_text_data_algorithm",""]],"struct":[["ConsumeBodyPromiseHandler","The promise handler used to consume the body, https://fetch.spec.whatwg.org/#concept-body-consume-body"],["ConsumeBodyPromiseRejectionHandler",""],["ExtractedBody","The result of https://fetch.spec.whatwg.org/#concept-bodyinit-extract"],["TransmitBodyConnectHandler","The IPC route handler for https://fetch.spec.whatwg.org/#concept-request-transmit-body. This route runs in the script process, and will queue tasks to perform operations on the stream and transmit body chunks over IPC."],["TransmitBodyPromiseHandler","The handler of read promises of body streams used in https://fetch.spec.whatwg.org/#concept-request-transmit-body."],["TransmitBodyPromiseRejectionHandler","The handler of read promises rejection of body streams used in https://fetch.spec.whatwg.org/#concept-request-transmit-body."]],"trait":[["BodyMixin","https://fetch.spec.whatwg.org/#body"],["Extractable","https://fetch.spec.whatwg.org/#concept-bodyinit-extract"]]});