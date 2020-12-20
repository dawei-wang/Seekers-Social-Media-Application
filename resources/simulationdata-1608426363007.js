function initData() {
  jimData.variables["chat-text"] = "";
  jimData.variables["E-mail"] = "example@gmail.com";
  jimData.variables["Password-text"] = "seekers";
  jimData.variables["toggle-variable"] = "2";
  jimData.variables["Category-text"] = "";
  jimData.datamasters["Chat"] = [
    {
      "id": 1,
      "datamaster": "Chat",
      "userdata": {
        "1fba2918-9094-4c5a-bb80-cd638810022e": "Hi, what\u2019s going on?",
        "17aa95d9-dc8d-40e1-9fff-adbafa4bcc96": "sample text",
        "18a66192-8363-4dfe-b16b-c4a84593b719": ""
      }
    }
  ];

  jimData.datamasters["Contacts"] = [
    {
      "id": 1,
      "datamaster": "Contacts",
      "userdata": {
        "a04c74b6-8e50-495a-b0ea-018f35528ca8": "",
        "19127956-2f58-4c39-a40a-267c0d4ec440": "Mountain View, California",
        "1fecdfb9-e2ba-4fe2-8486-50054a17219e": "sample text",
        "69b31be1-ce81-45cf-af7a-19d76f430d8b": ""
      }
    },
    {
      "id": 2,
      "datamaster": "Contacts",
      "userdata": {
        "a04c74b6-8e50-495a-b0ea-018f35528ca8": "",
        "19127956-2f58-4c39-a40a-267c0d4ec440": "",
        "1fecdfb9-e2ba-4fe2-8486-50054a17219e": "sample text",
        "69b31be1-ce81-45cf-af7a-19d76f430d8b": ""
      }
    },
    {
      "id": 3,
      "datamaster": "Contacts",
      "userdata": {
        "a04c74b6-8e50-495a-b0ea-018f35528ca8": "",
        "19127956-2f58-4c39-a40a-267c0d4ec440": "",
        "1fecdfb9-e2ba-4fe2-8486-50054a17219e": "sample text",
        "69b31be1-ce81-45cf-af7a-19d76f430d8b": ""
      }
    },
    {
      "id": 4,
      "datamaster": "Contacts",
      "userdata": {
        "a04c74b6-8e50-495a-b0ea-018f35528ca8": "",
        "19127956-2f58-4c39-a40a-267c0d4ec440": "",
        "1fecdfb9-e2ba-4fe2-8486-50054a17219e": "sample text",
        "69b31be1-ce81-45cf-af7a-19d76f430d8b": ""
      }
    },
    {
      "id": 5,
      "datamaster": "Contacts",
      "userdata": {
        "a04c74b6-8e50-495a-b0ea-018f35528ca8": "",
        "19127956-2f58-4c39-a40a-267c0d4ec440": "",
        "1fecdfb9-e2ba-4fe2-8486-50054a17219e": "sample text",
        "69b31be1-ce81-45cf-af7a-19d76f430d8b": ""
      }
    },
    {
      "id": 6,
      "datamaster": "Contacts",
      "userdata": {
        "a04c74b6-8e50-495a-b0ea-018f35528ca8": "",
        "19127956-2f58-4c39-a40a-267c0d4ec440": "",
        "1fecdfb9-e2ba-4fe2-8486-50054a17219e": "sample text",
        "69b31be1-ce81-45cf-af7a-19d76f430d8b": ""
      }
    }
  ];
  jimData.datamasters["Contacts"].category = {
    "6ff6b995-4f28-4715-a445-f4cd8741d172": ["Titan Broadcast Network","San Jose State University"],
    "c17c13b1-1a32-4d3b-939f-024e2cdfff5e": [""],
    "c277dd47-ef7a-4b1f-bde3-10f523d999ae": ["China","U.S.","Mountain View, California","Palo Alto, California","San Jose, California","California"]
  };

  jimData.isInitialized = true;
}