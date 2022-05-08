const sort = (arr, n, min, max)=>
    {
        let temp = max - min + 1;
        let c = new Array(temp);
        let newArr = [];
        c.fill(0);
        for (let i = 0; i < n; i++)
        {
            c[arr[i] - min]++;
        }
        for (let i = 0; i < temp; i++)
        {
            for (let j = 0; j < c[i]; j++)
            {
                newArr.push(i + min + " ");
            }
        }
        return newArr;
    }
     
    let arr = [10, 10, 1, 4, 4, 100, 0];
    let min = 0, max = 100;
    let n = arr.length;
    // let test = sort(arr, n, min, max);
    // console.log(test); //['0 ', '1 ', '4 ', '4 ', '10 ', '10 ', '100 ']