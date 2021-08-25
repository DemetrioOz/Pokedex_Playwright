import fs from "fs";

class Service {
  async createReporter(User, Liga) {
    console.log(Liga);

    const user = User;

    const liga = Liga;

    let template = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Quick's Pokedex</title>
        <style>
          body {
            background-color: #e3350d;
            color: white;
            margin: 0;
            font-family: rubik;
          }
          .container {
            padding: 40px;
            margin: 0 auto;
          }
          .header {
            display: grid;
            grid-template-columns: 2.5fr 0.5fr 2fr;
            gap: 0px 0px;
          }
          h1 {
            text-transform: uppercase;
            text-align: center;
            font-size: 54px;
          }
          #logo {
            width: 90vh;
            height: 55vh;
          }
          #divLogo {
            width: 105vh;
            height: 60vh;
            border-radius: 10px;
            background-color: white;
            margin: 10px;
            display: grid;
            justify-content: center;
            align-items: center;
            -webkit-box-shadow: 2px -1px 28px -3px #fff;
            box-shadow: 2px -1px 28px -3px #fff;
          }
          #pokedex {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            grid-gap: 20px;
            padding-inline-start: 0;
          }
          #userDiv {
            animation: bounce 0.5s linear;
            display: grid;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            width: 55vh;
            height: 60vh;
            background-color: white;
            text-align: center;
            color: black;
            font-size: 20px;
            font-weight: normal;
            text-transform: capitalize;
            font-family: rubik;
            border: 3px double #000000;
          }
          #userAvatar {
            width: 40vh;
            height: 40vh;
          }
          .card {
            list-style: none;
            padding: 40px;
            background-color: #f4f4f4;
            color: #222;
            text-align: center;
            border-radius: 10px;
            border: 3px double #000000;
          }
          .card:hover {
            animation: bounce 0.5s linear;
          }
          .card-title {
            text-transform: capitalize;
            margin-bottom: 0px;
            font-size: 32px;
            font-weight: normal;
          }
          .card-subtitle {
            margin-top: 5px;
            color: #666;
            font-weight: lighter;
          }
          .card-image {
            height: 180px;
          }
          @keyframes bounce {
            20% {
              transform: translateY(-6px);
            }
            40% {
              transform: translateY(0px);
            }
            80% {
              transform: translateY(-2px);
            }
            100% {
              transform: translateY(0);
            }
          }
        </style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div class="container">
          <div class="header">
            <!-- <h1>Pokedex</h1>s -->
            <div id="divLogo">
              <img
                id="logo"
                src="https://assets.change.org/photos/5/ka/he/QhKAhesgwIcUrSZ-800x450-noPad.jpg?1560307369"
              />
            </div>
            <div></div>
            <div id="userDiv">
              <img src="${user.avatar}" id="userAvatar" />
              <h3>Treinador: ${user.name}</h3>
            </div>
          </div>
          <ul id="pokedex">
            <li class="card">
              <img class="card-image" src="${liga[0].image}" />
              <h2 class="card-title">${liga[0].id}. ${liga[0].name}</h2>
              <p class="card-subtitle">Type: ${liga[0].type}</p>
              <li class="card">
              <img class="card-image" src="${liga[1].image}" />
              <h2 class="card-title">${liga[1].id}. ${liga[1].name}</h2>
              <p class="card-subtitle">Type: ${liga[1].type}</p>
            </li>
            <li class="card">
              <img class="card-image" src="${liga[2].image}" />
              <h2 class="card-title">${liga[2].id}. ${liga[2].name}</h2>
              <p class="card-subtitle">Type: ${liga[2].type}</p>
            </li>
            <li class="card">
              <img class="card-image" src="${liga[3].image}" />
              <h2 class="card-title">${liga[3].id}. ${liga[3].name}</h2>
              <p class="card-subtitle">Type: ${liga[3].type}</p>
            </li>
            <li class="card">
              <img class="card-image" src="${liga[4].image}" />
              <h2 class="card-title">${liga[4].id}. ${liga[4].name}</h2>
              <p class="card-subtitle">Type: ${liga[4].type}</p>
            </li>
            <li class="card">
              <img class="card-image" src="${liga[5].image}" />
              <h2 class="card-title">${liga[5].id}. ${liga[5].name}</h2>
              <p class="card-subtitle">Type: ${liga[5].type}</p>
            </li>
            </li>
          </ul>
        </div>
      </body>
    </html>
    `;

    fs.writeFile("arquivo.html", template, (err) => {
      if (err) throw err;
    });
  }
}

export default Service;
