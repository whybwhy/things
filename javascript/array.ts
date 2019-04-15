{
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
    // https://beomyeonandrewkim.github.io/posts/javasciript/handle-array/
    // https://jaeyeophan.github.io/2017/05/11/ES6-12-Array-API/#Array-prototype-entries
    // Prototype Object Access
    console.log(Array.prototype);
    console.dir(Array.prototype);

    let obj1 = [1, 2, 3];
    let obj2 = 'string';

    console.log('Array.from: ', Array.from(obj2));
    console.log('Array.of: ', Array.of(1, 2, 3));
    console.log('Array.isArray: ', Array.isArray(obj1), Array.isArray(obj2));
}

{
    // Array.prototype.concat
    // concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];

    console.log('Array.prototype.concat: ', array1.concat(array2));
    // @ts-ignore
    console.log('Array.prototype.concat: ', array1.concat('7'));
    console.log('Array.prototype.concat: ', array1);
    console.log('Array.prototype.concat: ', array2);

}

{
    // Array.prototype.copyWithin
    // copyWithin() 메서드는 배열의 일부를 얕게 복사한 뒤, 동일한 배열의 다른 위치에 덮어쓰고 그 배열을 반환합니다. 이 때, 크기(배열의 길이)를 수정하지 않고 반환합니다.
    let arr = [1, 2, 3, 4];
    console.log('Array.prototoype.copyWithin: ', arr.copyWithin(1, 2)); // arr = [1,3,4,4]   // end 를 지정하지 않으면 배열의 끝(lengh)까지 복사
    console.log('Array.prototoype.copyWithin: ',arr.copyWithin(2, 0, 2)); // arr = [1,3,1,3]
    console.log('Array.prototoype.copyWithin: ',arr.copyWithin(0, -3, -1)); // arr = [3,1,1,3]  // 음수인덱스면 마지막부터.

}

{
    // Array.prototype.entries
    // entries() 메서드는 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 Array Iterator 객체를 반환합니다.
    let arr = ['a', 'b', 'c'];
    // @ts-ignore
    for (let [v, k] of arr.entries()) {
        console.log('Array.prototype.entries: ', v, k);
    }
}

{
    // Array.prototype.every
    // every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
    // 빈 배열에서 호출하면 무조건 true를 반환합니다.
    const arr = [20, 40, 50, 70];

    let result = arr.every( e => {
        return e > 65 ? true : false;
    });

    console.log('Array.prototype.every: ', result);
}

{
    // Array.prototype.fill
    // fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
    const arr = [9, 3, 4, 1, 0];

    let result = arr.fill(0, 2, 3);
    console.log('Array.prototype.fill: ', result);    //[ 9, 3, 0, 1, 0 ]

    result = arr.fill(0, 0);
    console.log('Array.prototype.fill: ', result);    //[ 0, 0, 0, 0, 0 ]
}

{
    // Array.prototype.filter
    // filter() 메서드는 주어진 판별 함수를 통과하는 요소를 모아 새로운 배열로 만들어 반환합니다.
    const arr = [9, 4, 5, 6, 7];

    let result = arr.filter(e=> e > 5);
    console.log('Array.prototype.filter: ', result);
}

{
    // Array.prototype.find
    // find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
    const arr = [3, 7, 8, 3, 5];

    let result = arr.find(e => e > 4);
    console.log('Array.prototype.find: ', result);
}

{
    // Array.prototype.findIndex
    // findIndex() 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
    const arr = [3, 7, 8, 3, 5];

    let result = arr.findIndex(e => e > 4);
    console.log('Array.prototype.findIndex: ', result);
}

{
    // Array.prototype.forEach
    // forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행합니다.
    const arr = [3, 7, 8, 3, 5];

    arr.forEach( (e, i) => console.log('Array.prototype.forEach: ', i, e));
}

{
    // Array.prototype.includes
    // includes() 메서드는 배열이 특정 요소를 포함하고 있는지 여부를 확인하고, 알맞게 true 또는 false를 반환합니다.
    const arr = [0, 'cat', 'dog', 9];
    let result = arr.includes('dog');
    console.log('Array.prototype.includes: ', result);
}

{
    // Array.prototype.indexOf
    // indexOf() 메서드는 배열에서 지정된 요소를 찾을 수있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
    const arr = [0, 'cat', 'dog', 9];
    let result = arr.indexOf('dog');
    console.log('Array.prototype.indexOf: ', result);
    result = arr.indexOf('ca');
    console.log('Array.prototype.indexOf: ', result);
}

{
    // Array.prototype.join
    // join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
    const arr = [0, 'cat', 'dog', 9];
    console.log('Array.prototype.join: ', arr.join('+'));
    console.log('Array.prototype.join: ', arr.join());
    console.log('Array.prototype.join: ', arr.join(' '));
}

{
    // Array.prototype.keys
    // keys() 메서드는 배열의 각 인덱스를 키 값으로 가지는 새로운 Array Iterator 객체를 반환합니다.
    const arr = [0, 'cat', 'dog', 9];
    for (let k in arr.keys()) {
        console.log('Array.prototype.keys: ', k);
    }
    const arr2 = [...arr.keys()];
    console.log('Array.prototype.keys: ', arr2);
}

{
    // Array.prototype.lastIndexOf
    // lastIndexOf() 메서드는 지정된 요소가 배열에서 발견 될 수있는 마지막 인덱스를 반환하고, 존재하지 않으면 -1을 반환합니다. 배열은 fromIndex에서 시작하여 뒤로 검색됩니다.
    const arr = [0, 'cat', 'dog', 9];
    console.log('Array.prototype.lastIndexOf', arr.lastIndexOf(0));
}

{
    // Array.prototype.map
    // map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
    const arr = [0, 'cat', 'dog', 9];
    let result = (arr.map(e => e + '++ 10'));
    console.log('Array.prototype.map: ', result);
}

{
    // Array.prototype.pop
    // pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
    const arr = [0, 'cat', 'dog', 9];
    let result = arr.pop();
    console.log('Array.prototype.pop: ', arr);
    console.log('Array.prototype.pop: ', result);
}

{
    // Array.prototype.push
    // push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
    const arr = [0, 'cat', 'dog', 9];
    let result = arr.push(10, 'zebra');
    console.log('Array.prototype.push: ', arr);
    console.log('Array.prototype.push: ', result);

    const arr2 = [9, 30, 60];
    console.log('Array.prototype.push: ', Array.prototype.push.apply(arr, arr2));
    console.log('Array.prototype.push: ', arr);
}

{
    // Array.prototype.reduce
    // reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
    const arr = [0, 1, 2, 9];
    console.log('Array.prototype.reduce: ', arr.reduce((pre, cur) => pre + cur));
    console.log('Array.prototype.reduce: ', arr)
}

{
    // Array.prototype.reduceRight
    // reduceRight() 메서드는 누적기에 대해 함수를 적용하고 배열의 각 값 (오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야합니다.
    const arr = [0, 1, 2, 9];
    let result = arr.reduceRight((pre, cur) => pre-cur);
    console.log('Array.prototype.reduceRight: ', result);
}

{
    // Array.prototype.reverse
    // reverse() 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
    const arr = [0, 1, 2, 9];
    let result = arr.reverse();
    console.log('Array.prototype.reverse', arr);
    console.log('Array.prototype.reverse', result);
}

{
    // Array.prototype.shift
    // shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
    const arr = [0, 1, 2, 9];
    let result = arr.shift();
    console.log('Array.prototype.shift', arr);
    console.log('Array.prototype.shift', result);
}

{
    // Array.prototype.slice
    // slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 수정되지 않습니다.
    const arr = [0, 1, 2, 9];
    let result = arr.slice(0, 3);
    console.log('Array.prototype.slice: ',arr);
    console.log('Array.prototype.slice: ',result);
}

{
    // Array.prototype.some
    // some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
    const arr = [0, 1, 2, 9];
    let result = arr.some(e => e < 1);
    console.log('Array.prototype.some: ',result);
}

{
    const arr = ['aaaa','b','a', 1, 4, 5];
    let result = arr.sort();
    console.log('Array.prototype.sort: ', arr);
    console.log('Array.prototype.sort: ', result);
}

{
    // Array.prototype.splice
    // splice() 메서드는 배열의 기존 요소를 삭제 또는 교체 하거나 새 요소를 추가여 배열의 내용을 변경합니다.
    const arr = ['aaaa','b','a', 1, 4, 5];
    let result = arr.splice(0, 2);
    console.log('Array.prototype.splice: ', arr);
    console.log('Array.prototype.splice: ', result);
}

{
    // Array.prototype.toLocaleString
    // toLocaleString() 메서드는 배열의 요소를 나타내는 문자열을 반환합니다. 요소는 toLocaleString 메서드를 사용하여 문자열로 변환되고 이 문자열은 locale 고유 문자열(가령 쉼표 “,”)에 의해 분리됩니다.
    const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
    let localeString = array1.toLocaleString('en', {timeZone: "UTC"});

    console.log('Array.prototype.splice: ', array1);
    console.log('Array.prototype.splice: ', localeString);
}

{
    // Array.prototype.toString
    // toString() 메서드는 지정된 배열 및 그 요소를 나타내는 문자열을 반환합니다.
    const arr = ['aaaa','b','a', 1, 4, 5];
    const result = arr.toString();

    console.log('array.prototype.toString: ', arr);
    console.log('array.prototype.toString: ', result);
}

{
    // Array.prototype.unshift
    // unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
    const arr = ['aaaa','b','a', 1, 4, 5];
    const result = arr.unshift(5, 8, 9);
    console.log('array.prototype.unshift: ', arr);
    console.log('array.prototype.unshift: ', result);
}

{
    // Array.prototype.values
    // values() 메서드는 배열의 각 인덱스에 대한 값을 가지는 새로운 Array Iterator 객체를 반환합니다.
    const arr = ['aaaa','b','a', 1, 4, 5];

    for (const value of arr.values()) {
        console.log('array.prototype.values :', value);
    }
}
