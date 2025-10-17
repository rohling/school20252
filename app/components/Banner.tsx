export function Banner(){
    return(
        <div className="md:grid grid-cols-2 md:items-center">
      <div className="banner-img">
        <img src="/img/banner.svg" alt="Homem sentado no sofá" />
      </div>

      <div className="text-center text-white">
        <h3>UTFPR</h3>
        <h5 className="text-[#00e77f]">A MELHOR ESCOLA DE INFORMÁTICA</h5>
        <button className="btn">Informções</button>
      </div>
    </div>
    )
}