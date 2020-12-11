class Tuple:
    def __init__(self, key, value):
        self.key = key
        self.value = value


employees = [
    {
        'name': 'Anderson',
        'gender': 'Male',
        'salary': 8
    },
    {
        'name': 'Susana',
        'gender': 'Female',
        'salary': 7
    },
    {
        'name': 'Nicolas',
        'gender': 'Male',
        'salary': 10
    },
    {
        'name': 'Jhin',
        'gender': 'Male',
        'salary': 4
    },
    {
        'name': 'MaRia',
        'gender': 'Female',
        'salary': 5
    },
    {
        'name': 'Fernanda',
        'gender': 'Female',
        'salary': 9
    }
]

def map(_employees, key2, value):
    mappedData = []
    for _employee in _employees:
        _key = _employee[key2]
        _value = _employee[value]
        _keyValuePair = Tuple(_key, _value)
        mappedData.append(_keyValuePair)

    return mappedData

def reduce(_mappedData):
    reducedData = {}
    for i in _mappedData:
        if i.key not in reducedData.keys():
            reducedData[i.key] = []
        reducedData[i.key].append(i.value)

    print(reducedData)

    for i in reducedData:
        sum = 0;
        for j in reducedData[i]:
            sum += j
        reducedData[i] = sum

    print(reducedData)

mappedData = map(employees, 'gender', 'salary')

for i in mappedData:
    print(i.key, i.value)

reduce(mappedData)