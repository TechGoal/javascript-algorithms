class Hash {
    constructor(size) {
        this.limit = 0;
        this.size = size;
        this.keys = this.initArray(size);
        this.values = this.initArray(size);
    }

    initArray(size) {
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(null);
        }
        return array;
    }

    put(key, value) {
        if (this.limit > this.size) throw 'Hash is full';
        let hashedIndex = this.hash(key);
        while (this.keys[hashedIndex] !== null) {
            hashedIndex++;
            hashedIndex = this.hash(hashedIndex);
        }
        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }

    get(key) {
        let hashedIndex = this.keys[key];
        while (this.keys[hashedIndex] !== key) {
            hashedIndex++;
            hashedIndex = this.hash(hashedIndex);
        }
        return this.values[hashedIndex];
    }

    hash(key) {
        if (!Number.isInteger(key)) throw 'Key is not a number';
        return key % this.size;
    }
}

const hashObj = new Hash(13);
hashObj.put(4, 'Aakash');
hashObj.put(4, 'Vyas');
hashObj.put(1, 'Himanshu');

module.exports = Hash;