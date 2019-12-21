var message = "So this is typescript";
console.log('message', JSON.stringify(message, null, 2));
var getDescription = function (tags) {
    return tags.map(function (tag) { return tag.description; });
};
var tag1 = {
    description: "some tags",
    url: "http://a.b.c/meh",
};
var someTagsArray = [tag1];
console.log(getDescription(someTagsArray));
