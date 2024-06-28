import '../styles/Button.css';


type GenerateButtonProps = {
  handleClick: () => void;
}

function GenerateButton({ handleClick }:GenerateButtonProps){
  return (
    <button onClick={handleClick} className="generate-btn">
      Generate ➜
    </button>
  );
}

export default GenerateButton;
