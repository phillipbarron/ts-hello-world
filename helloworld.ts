

interface Tag {
    description: String,
    url: String
}
let message: String = "So this is typescript";

console.log('message', JSON.stringify(message, null, 2));

const getDescription = (tags: Array<Tag>) : Array<String> => {
    return tags.map(tag => tag.description);
}

const tag1 = {
    description: "some tags",
    url: "http://a.b.c/meh",
}

const someTagsArray: Array<Tag> = [tag1];

console.log(getDescription(someTagsArray));