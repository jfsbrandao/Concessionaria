import { Imagens } from './styles';

export const DoubleBlock = () => {
  return (
    <Imagens>
      <div className="div1">
        <h1>Reasons to love</h1>
        <div className='testiculo'>
        <h1 className="Tituluzaum">Built to Last</h1>
        <p>Every Subaru is built with quality parts and precision engineering, so you can count on your Subaru vehicle to be with you for the long road ahead. This legendary reliability and longevity has earned awards from automotive experts and inspired loyalty from Subaru drivers everywhere.</p>
        <p className='Linkzin'>More Reasons to Love a Subaru</p>
      </div>
      <div className='Slide'><span>01/03</span></div>
      </div>

      <div className="div2">
        <img src="src/assets/22_IMP_RTL_built_1.webp" />
      </div>
    </Imagens>
  );
};
