import "../panel/panel.css";
import Info from "../info/info";
import Card from "../card/card";

export default function Panel() {
  return (
    <div className="panel">
      <div className="panelWrapper">
        <div className="panelLeft">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
