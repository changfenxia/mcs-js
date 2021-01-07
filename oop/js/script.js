class Tiger {
    constructor(name) {
        this.name = name;
    }

    feedCat() {
        console.log('Purrr');
    }
}

class angryTiger extends Tiger {
    throwDart() {
        console.log('ZzZzzZzZz');
    }
}

const zeemo = new angryTiger('zeemo');

//test
zeemo.feedCat();
zeemo.throwDart();