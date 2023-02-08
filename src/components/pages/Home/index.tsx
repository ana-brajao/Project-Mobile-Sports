import { NextPage } from "next";
import React from "react";

import { ColumnInfo, Container, Content, SidebarLeft, View } from "./styles";

export const Home: NextPage = () => {
  const [value, setValue] = React.useState(null)
  function handleButton(){
    console.log("OK")
    if (value < 100 || value > 1000){
      return alert("VALOR INVALIDO")
    }
    else {
      sendValues()
    }
  }
  async function sendValues(){
    console.log("Chamou a função")
    const data={valueAposta : value}
    await fetch("api/sport_bet", {method: "POST", body: JSON.stringify(data)}
    ).then((res) => {
      console.log(res)
      setValue(null)
      return alert("Aposta criada com sucesso!")
    }).catch(() => {
      return alert("Erro ao criar aposta")
    })
  }
  return (
    <Container>
      <SidebarLeft>

        <div className="title">
          <h2>Soccer - Unreal Tournament</h2>
        </div>

        <ul>
          <li>Real Madrid x Figueirense</li>
          <li>São Paulo x Benfica</li>
          <li>Ituano x Paris Saint Germain</li>
          <li>Palmeiras x Manchester City</li>
          <li className="gray">Baskelball - NBA</li>
          <li>Chicago Bulls x NY Nicks</li>
          <li>Cleveland Cavalliers x Orlando Magick</li>
          <li>Real Madrid x Figueirense</li>
        </ul>
      </SidebarLeft>

      <Content>
        <header>
          <h1>São Paulo x Benfica</h1>
        </header>

        <View>
          <h3>Winner</h3>

          <div className="grid">
            <section id="field_A">
              <p>São Paulo</p>
            </section>

            <section id="field_B">
              <p>X</p>
            </section>

            <section id="field_C">
              <p>Benfica</p>
            </section>
          </div>
        </View>
      </Content>

      <ColumnInfo>
        <div className="header">
          <h2>São Paulo x Benfica</h2>
        </div>

        <div className="form">
          <h4>Winner: São Paulo</h4>

          <form>
            <input type="text" onChange={(e) => setValue(e.target.value)}/>
          </form>
        </div>

        <div className="totalBet">
          <section>
            <h5>TOTAL BET AMOUNT</h5>
            <p>{value} US$</p>
          </section>

          <section>
            <h5>MATCH MULTIPLIER</h5>
            <p>15%</p>
          </section>

          <section>
            <h5>YOU CAN END WITH</h5>
            { value > 0 && value != null ?
            <p>{parseFloat(value) + (15/100) * value} US$</p>
             : 
            <p>0.00 US$</p>
            }
          </section>

          <button onClick={() => handleButton()}>
            PLACE BET
          </button>


        </div>
      </ColumnInfo>
    </Container>
  );

  
};
