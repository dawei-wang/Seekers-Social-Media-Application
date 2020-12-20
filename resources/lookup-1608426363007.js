(function(window, undefined) {
  var dictionary = {
    "13724559-8e1a-4684-bed9-20d8c2514dff": "Login",
    "88a5138f-db7b-4f63-adda-1b0c03734d7c": "Messages Screen Ayesha",
    "736bffbe-f598-483f-8bfa-ba4c59fac5b8": "Video Call in progress Ayesha",
    "f531109f-5ffc-4074-9292-66cd59974c53": "Options",
    "16b270aa-b63c-4f19-a99c-70aea41df426": "Messages Screen En-Ping",
    "dd4ec2de-bc8b-4243-aa4c-bb8936a90e1a": "shared_photo",
    "7d4728d8-01d4-4735-9843-8d7df949b7f9": "Call Screen Ayesha",
    "f323258c-0608-4ac8-b366-21009f40ba75": "notification",
    "26447afc-4856-453f-b1bd-6c8018f18f75": "shared_file",
    "3f5a5657-6739-43c7-b119-7ce159f81866": "invite",
    "932af582-af2f-4426-8faa-8da4fc66938e": "Messages Screen Hiep",
    "e5ce5a72-f84e-4abb-89c6-47e5c8088bba": "Messages Screen Dawei",
    "376de8b4-8179-44d8-83ad-c26c6e8d74e0": "Call Screen Dawei",
    "cfaf4700-58e3-40e1-8cd7-6111e69433d4": "Contacts Screen",
    "946ee751-76cc-4f33-af23-d018b98a00c3": "Contact_us",
    "d434287a-64d5-4f71-8fdf-b59545463ee6": "Call Screen En-Ping",
    "ace8ef79-fb8c-4528-8cf5-9da697a4c74a": "members",
    "8025a691-241e-4c5c-b505-bcc12eb554f1": "Video Call in progress En-Ping",
    "1a302b7b-e911-4a6c-88c1-acf551f11862": "chat",
    "4b4a0597-43de-4425-a4a5-36fca9efcac7": "SignUp",
    "2c29afac-09f6-44e2-9018-2a5722a4b3d6": "Call Screen Hiep",
    "37a82a39-353a-4bff-9549-610bd8faf79a": "Video Call in progress Dawei",
    "680eaca9-b9d2-4150-b483-18cea5edb373": "Video Call in progress Hiep",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "e2106797-63f4-40c8-9e88-cbe142b82455": "chat",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);