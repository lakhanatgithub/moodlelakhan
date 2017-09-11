$(document).ready(function () {
    ADL.XAPIWrapper.changeConfig({
        "endpoint": "https://cloud.scorm.com/tc/Y9ACNCGJ1U/",
        “auth” : “Basic ” + toBase64("QhoFp0isrJNgYhhnbK0:qEh8OQk9kuOUGbRfmWc")
    });

    H5P.externalDispatcher.on(‘xAPI’, function(event) {
        console.log(event.data.statement);

        var stmt = new ADL.XAPIStatement(
            event.data.statement.actor,
            event.data.statement.verb,
            event.data.statement.object);
            stmt.generateId();
            stmt.generateRegistration();
            console.log(JSON.stringify(stmt));

        ADL.XAPIWrapper.sendStatement(stmt)
    });
});


// Statement Detail

// var statement = {
//  "actor": {
//     "mbox": "mailto:Tester@example.com",
//     "name": "Your Name Here",
//     "objectType": "Agent"
//  },
//     "verb": {
//     "id": "http://example.com/xapi/interacted",
//     "display": {"en­US": "interacted"}
//  },
//     "object": {
//     "id": "http://example.com/button_example",
//     "definition": {
//     "name": {"en­US": "Button example"},
//     "description": {"en­US": "Example xAPI Button"}
//  },
//     "objectType": "Activity"
//  }
// };
