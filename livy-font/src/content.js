import './content.css';

function LivyContent(props) {
  return (
    <div className="livy-font-content">
      <div className="livy-font-content-container">
        <div className="label-container">
          <p>Catharsis Bedouin</p>
        </div>
        <div className="content-container">
          <h1 className="catharsis-bedouin-regular">{props.message}</h1>
        </div>
      </div>
      
      <div className="livy-font-content-container">
        <div className="label-container">
          <p>Fiolex Girls</p>
        </div>
        <div className="content-container">
          <h1 className="fiolex-girls-regular">{props.message}</h1>
        </div>
      </div>
      
      <div className="livy-font-content-container">
        <div className="label-container">
          <p>Pinyon Script</p>
        </div>
        <div className="content-container">
          <h1 className="pinyon-script-regular">{props.message}</h1>
        </div>
      </div>
      
      <div className="livy-font-content-container">
        <div className="label-container">
          <p>Mrs Saint Delafield</p>
        </div>
        <div className="content-container">
          <h1 className="mrs-saint-delafield-regular">{props.message}</h1>
        </div>
      </div>
      
      <div className="livy-font-content-container">
        <div className="label-container">
          <p>Dancing Script</p>
        </div>
        <div className="content-container">
          <h1 className="dancing-script-regular">{props.message}</h1>
        </div>
      </div>
      
      <div className="livy-font-content-container">
        <div className="label-container">
          <p>Alex Brush</p>
        </div>
        <div className="content-container">
          <h1 className="alex-brush-regular">{props.message}</h1>
        </div>
      </div>
    </div>
  );
}

export default LivyContent;
