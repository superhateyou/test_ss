import React, { useState } from 'react';

interface Model {
  params: Param[];
}

interface Param {
  name: string;
  value: string;
}

const EditableParam: React.FC<{ param: Param; onChange: (value: string) => void }> = ({
  param,
  onChange,
}) => {
  return (
    <div>
      <label>{param.name}</label>
      <input type="text" value={param.value} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

const ModelEditor: React.FC<{ model: Model }> = ({ model }) => {
  const [params, setParams] = useState(model.params);

  const handleParamChange = (index: number, value: string) => {
    const newParams = [...params];
    newParams[index].value = value;
    setParams(newParams);
  };

  const getModel = () => {
    return { params };
  };

  return (
    <div>
      {params.map((param, index) => (
        <EditableParam
          key={index}
          param={param}
          onChange={value => handleParamChange(index, value)}
        />
      ))}
      <button onClick={() => console.log(getModel())}>Get Model</button>
    </div>
  );
};

function App() {
  const model = {
    params: [
      { name: 'param1', value: 'value1' },
      { name: 'param2', value: 'value2' },
    ],
  };

  return <ModelEditor model={model} />;
}

export default App;
