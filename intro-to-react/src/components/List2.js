import "./List2.css";
export const List2 = () => {
  return (
    <div>
      <label>Name</label>
      <pre className="tab inline">: </pre>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" />
      <br />
      <br />
      <label>Price</label>
      <pre className="tab inline">: </pre>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="number" />
      &nbsp;
      <br />
      <br />
      <label>Condition</label>
      <pre className="tab inline">: </pre>
      <input type="radio" />
      <label>New</label>&nbsp;
      <input type="radio" />
      <label>Second</label>
      <br />
      <br />
      <label>Warehouse</label>
      <pre className="tab inline">: </pre>
      <select>
        <option value="JKT">JKT</option>
        <option value="BGR">BGR</option>
        <option value="DPK">DPK</option>
      </select>
      <br />
      <br />
      <label>Courier</label>
      <pre className="tab inline">: </pre>
      &nbsp;&nbsp;&nbsp;
      <input type="checkbox" />
      <label>JNE</label>&nbsp;&nbsp;
      <input type="checkbox" />
      <label>JNT</label>&nbsp;&nbsp;
      <input type="checkbox" />
      <label>Ninja Express</label>
      <br />
      <br />
    </div>
  );
};
