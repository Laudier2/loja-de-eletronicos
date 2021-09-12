import React, { useEffect, useState } from 'react'

export default function Desc() {

	const [ receb1, setReceb1 ] = useState('')
	const [ receb2, setReceb2 ] = useState('')
	const [ receb3, setReceb3 ] = useState('')
	const [ receb4, setReceb4 ] = useState('')

  useEffect(() => {
    const req = localStorage.getItem("imagem")
    const res = JSON.parse(req)
    setReceb1(res)		
  },[])

	useEffect(() => {
		const req1 = localStorage.getItem("price")
    	const res1 = JSON.parse(req1)
    setReceb2(res1)
	},[])

	useEffect(() => {
		const req2 = localStorage.getItem("name")
    	const res2 = JSON.parse(req2)
    setReceb3(res2)
	},[])

	useEffect(() => {
		const req3 = localStorage.getItem("descricao")
    	const res3 = JSON.parse(req3)
    setReceb4(res3)
	},[])

  return (
      <>
				<div className="container col-sm-10 mt-5">
					<div class="card-group">
						<div class="card col-10">
							<img class="card-img-top col-7 ldo mrg" src={receb1} alt="imagem" />
							<img src="https://http2.mlstatic.com/D_NQ_NP_694664-MLA44517686057_012021-O.webp" className="img-3 ldo" alt="imagem" />
							<img src="https://http2.mlstatic.com/D_NQ_NP_694664-MLA44517686057_012021-O.webp" className="img-3 ldo" alt="imagem" />
							<img src="https://http2.mlstatic.com/D_NQ_NP_694664-MLA44517686057_012021-O.webp" className="img-3 ldo" alt="imagem" />
							
							<div class="card-body mt-5">
								<h5 class="card-title">Descrição do produto</h5>
								<p class="card-text">{receb4}</p>
								<p class="card-text"><small class="text-muted"></small></p>
							</div>
						</div>
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">{receb3}</h5>
								<p class="card-text">{receb2}</p>
								<p class="card-text"><small class="text-muted"></small></p>
								<br />
								<button className="btn btn-info btn-block">Compra</button>
								<button className="btn btn-warning btn-block">Adiciona cart</button>
							</div>
						</div>
					</div>
				</div>
      </>
  )
}
