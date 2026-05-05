// 📱 FULLSCREEN (ROBUSTO)
// ==========================
function entrarFullscreen() {
    const el = document.documentElement;

    if (document.fullscreenElement) return;

    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) { // Safari
        el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) { // IE11
        el.msRequestFullscreen();
    }
}

// Ativa em qualquer interação (mais confiável)
["click", "touchstart"].forEach(evt => {
    document.addEventListener(evt, entrarFullscreen);
});    
    // ==========================
    // 🌐 CONFIG API
    // ==========================
    const API = "https://script.google.com/macros/s/AKfycbzRN-ksLk_gaXzKxMp3mK4L_SDEpDRNmEYRjjHU5BL1Zo1cQYLw5CnbUmubI4E-xgjY/exec";
    let dadosOriginais = [];
    let frasesIA = {
        amamentacao: { critico: ["Nenhuma mamada registrada neste período. Verifique se esqueceu de anotar.",
        "Atenção urgente: sem registros de amamentação até o momento.",
        "Nenhum registro de nutrição encontrado. É importante manter a frequência.","Ainda não encontramos registros de mamadas neste período. Se houve alguma, você pode adicionar para manter o acompanhamento completo 💕",
"Até o momento, não há registros de amamentação. Que tal verificar se alguma mamada ficou sem anotação?",
"Nenhuma mamada foi registrada por aqui ainda. Manter esse registro ajuda muito no cuidado com o bebê 🤱",
"Parece que ainda não tivemos anotações de alimentação neste período. Se puder, vale conferir com carinho.",
"Ainda não identificamos registros de nutrição. Se algo não foi anotado, você pode atualizar quando puder 😊",
"Por enquanto, não há registros de mamadas. Fique à vontade para adicionar — isso ajuda bastante no acompanhamento.",
"Não encontramos registros de alimentação até agora. Pode ser só um esquecimento, vale dar uma olhadinha 💛",
"Nenhuma mamada registrada neste período. Sempre que puder, registrar ajuda a manter tudo sob controle.",
"Até aqui, não há registros de nutrição. Se precisar, você pode incluir as informações a qualquer momento.",
"Ainda não vemos registros de amamentação. Com um pequeno ajuste, seu acompanhamento fica completo ✨"], baixo: ["Volume de mamadas abaixo do recomendado (mín. 8). Fique atento!",
        "O ritmo de amamentação está lento hoje. Tente oferecer o peito/mamadeira mais vezes.",
        "Atenção: frequência de amamentação menor que o esperado para este período.",
        "Hoje o número de mamadas ficou um pouco abaixo do ideal (mín. 8). Se possível, tente oferecer mais vezes ao longo do dia 💛",
  "Percebemos que o ritmo de amamentação está mais tranquilo hoje. Que tal estimular mais algumas mamadas?",
  "A frequência de mamadas está um pouco menor que o esperado neste período. Vale observar e incentivar mais momentos de alimentação.",
  "Hoje o Gabriel mamou menos vezes que o recomendado. Se conseguir, ofereça o peito ou mamadeira com mais frequência.",
  "O padrão de amamentação está um pouco reduzido hoje. Pequenos estímulos ao longo do dia podem ajudar bastante.",
  "Notamos uma leve diminuição nas mamadas. Tente oferecer com mais regularidade, respeitando o tempo do Gabriel.",
  "A quantidade de mamadas está um pouco abaixo do ideal hoje. Fique tranquilo(a), mas vale incentivar mais ofertas.",
  "Hoje o ritmo de alimentação foi mais suave. Que tal aproveitar momentos de calma para oferecer mais mamadas?",
  "A frequência de amamentação está um pouco menor hoje. Oferecer mais vezes pode ajudar a manter o ritmo esperado.",
  "O número de mamadas ficou um pouco abaixo do recomendado. Observe com carinho e tente estimular mais ao longo do dia."], ideal: ["O Gabriel está mamando em um ritmo ideal. Ótimo trabalho!",
        "Excelente! A frequência de amamentação está perfeita hoje.",
        "Padrão de nutrição exemplar. O Gabriel parece estar bem alimentado.",
        "Ritmo bom e constante. Sinta orgulho de si mesma — o vínculo de vocês está cada dia mais lindo através dessa conexão.","O Gabriel está se alimentando muito bem. Dá para sentir o cuidado e o carinho em cada momento.",
    "Que lindo ver o ritmo do Gabriel hoje — está tudo fluindo de forma tão natural.",
    "A alimentação do Gabriel está acontecendo de maneira muito saudável. Você está fazendo um trabalho incrível.",
    "O Gabriel está seguindo um ritmo tranquilo e equilibrado. Esse cuidado faz toda a diferença.",
    "Cada mamada do Gabriel é um reflexo do seu amor e dedicação. Está tudo indo muito bem.",
    "O Gabriel está bem nutrido e confortável. Seu carinho está sendo sentido em cada detalhe.",
    "Que alegria ver o Gabriel se alimentando assim, com constância e serenidade.",
    "O ritmo do Gabriel está harmonioso hoje. Continue confiando nesse caminho tão bonito que vocês estão construindo.",
    "O Gabriel está recebendo exatamente o que precisa. Seu cuidado é essencial e está fazendo toda a diferença.",
    "Tudo indica que o Gabriel está bem alimentado e acolhido. Você está conduzindo isso com muita sensibilidade."], alto: ["Frequência de amamentação alta. Monitore sinais de saciedade ou desconforto.",
        "Muitas mamadas registradas. Observe se o bebê está buscando consolo ou se está com fome real.",
        "Frequência acima da média. Fique de olho em possíveis regurgitações por excesso.",
        "Gabriel está mamando bastante! Isso pode ser um pico de crescimento ou simplesmente ele querendo ficar pertinho de você. Aproveite esses momentos de aconchego.",
        "Muitas mamadinhas hoje, hein? Respire fundo, descanse quando puder e lembre-se: seu corpo e seu bebê estão trabalhando juntos.","Gabriel está mamando com bastante frequência. Observe com carinho os sinais de saciedade e conforto dele.",
    "Hoje o Gabriel buscou bastante o peito. Pode ser fome, aconchego ou necessidade de proximidade — tudo isso é natural.",
    "Frequência elevada nas mamadas do Gabriel. Fique atenta a pequenos sinais do corpinho dele, como desconforto ou refluxo.",
    "Gabriel está pedindo mais colinho através das mamadas. Isso também é uma forma linda de se sentir seguro.",
    "Muitas mamadas ao longo do dia. Gabriel pode estar passando por um salto de desenvolvimento — é uma fase importante.",
    "Gabriel mamou bastante hoje. Tente descansar quando possível e se acolher também — você está fazendo um ótimo trabalho.",
    "O ritmo de mamadas do Gabriel está intenso. Pode ser apenas uma fase de maior necessidade emocional e física.",
    "Gabriel está buscando mais o peito hoje. Isso pode trazer conforto para ele — aproveite esse momento de conexão.",
    "Dia de bastante amamentação com o Gabriel. Observe se ele relaxa após mamar, isso ajuda a entender as necessidades dele.",
    "Gabriel parece querer mais proximidade hoje. As mamadas também são uma forma de carinho e segurança para ele."] },
        sono: { baixo: ["Poucos períodos de descanso registrados. O Gabriel pode estar agitado.",
    "Registros de sono abaixo do ideal. Atenção a sinais de cansaço excessivo.",
    "Sonecas curtas ou insuficientes detectadas. Isso pode afetar o humor do Gabriel.",
    "Parece que alguém está lutando contra o soninho! Poucas sonecas registradas até agora.",
    "Hoje o soninho foi um pouco mais curto… talvez o Gabriel esteja precisando de um descanso extra ",
"Parece que o descanso ficou um pouquinho de lado hoje. Que tal um momento tranquilo para recuperar as energias?",
"O Gabriel descansou menos do que o ideal. Um colinho e um soninho podem ajudar bastante ",
"As sonecas foram mais curtinhas hoje… pode ser um bom momento para desacelerar um pouco ",
"Talvez o Gabriel esteja sentindo um leve cansaço. Um ambiente calmo pode fazer toda a diferença ",
"Hoje o descanso foi mais tímido… vamos ajudar o bebê a relaxar com carinho? 💤",
"Pode ser que o Gabriel esteja precisando de um tempinho a mais para descansar e se aconchegar ",
"O soninho não rendeu tanto hoje. Um momento de aconchego pode ajudar bastante ",
"Parece que o corpinho está pedindo mais descanso… vamos atender com carinho? ",
"Um dia com menos sonecas… talvez seja hora de pausar e cuidar com mais calma ",
"O Gabriel pode estar um pouquinho cansado. Que tal um ambiente mais calmo e acolhedor? ",
"Hoje o descanso foi mais leve… um carinho e um soninho podem trazer mais conforto ",
"Pouco soninho por aqui… vamos ajudar o Gabriel a se sentir mais tranquilo e relaxado ",
"Talvez esteja faltando um tempinho de descanso. Um colo quentinho pode ajudar muito ",
"O Gabriel pode estar só precisando de um pouco mais de aconchego e descanso hoje "], ok: ["Padrão de descanso estável.",
    "O Gabriel está mantendo uma boa rotina de sono.",
    "Registros de sono dentro da meta esperada.",
    "Tudo em ordem no reino dos sonhos! O padrão de descanso está ótimo.",
    "O descanso do Gabriel está seguindo de forma tranquila e equilibrada.",
    "O padrão de sono está bem ajustado, trazendo conforto e segurança ao Gabriel.",
    "O Gabriel está descansando bem, mantendo uma rotina saudável de sono.",
    "Tudo indica que o sono do Gabriel está acontecendo de forma serena e adequada.",
    "O ritmo de descanso do Gabriel está harmonioso e dentro do esperado.",
    "O Gabriel está tendo boas pausas de descanso ao longo do dia e da noite.",
    "O sono do Gabriel está fluindo com leveza, contribuindo para o seu bem-estar.",
    "A rotina de descanso do Gabriel está consistente e acolhedora.",
    "O Gabriel está encontrando um bom equilíbrio nos momentos de sono.",
    "Os períodos de descanso do Gabriel estão organizados e trazendo tranquilidade.","O Gabriel segue com um padrão de sono calmo e bem distribuído.",
"A rotina de descanso do Gabriel continua estável e reconfortante.",
"O Gabriel está aproveitando bem seus momentos de sono.",
"O descanso do Gabriel está acontecendo de forma leve e regular.",
"Tudo segue equilibrado no sono do Gabriel, trazendo bem-estar.",
"O Gabriel está mantendo um ritmo saudável de descanso.",
"O padrão de sono permanece consistente e adequado para o Gabriel.",
"O Gabriel está dormindo com tranquilidade e boa regularidade.",
"Os ciclos de sono do Gabriel estão bem organizados.",
"O descanso do Gabriel está sendo suficiente e restaurador.",
"O Gabriel segue com noites e pausas de descanso bem ajustadas.",
"O sono do Gabriel está ocorrendo de maneira equilibrada e serena.",
"O Gabriel está conseguindo descansar de forma contínua e confortável.",
"A qualidade do sono do Gabriel está muito boa.",
"O Gabriel mantém um padrão de descanso que transmite segurança.",
"Tudo indica que o Gabriel está tendo um sono reparador.",
"O descanso do Gabriel está bem alinhado com suas necessidades.",
"O Gabriel segue com uma rotina de sono suave e bem estruturada.",
"O padrão de descanso do Gabriel continua harmonioso.",
"O Gabriel está desfrutando de um sono tranquilo e equilibrado."] },
        saude: { top: ["✨ Parabéns! 💖 Nenhuma regurgitação hoje. O corpinho do seu bebê está retendo o leite direitinho.",
    "✨ Que notícia boa! Sem registros de regurgitação. Isso mostra que a digestão está super tranquila hoje.",
    "✨ Vitória! 💖 Hoje o estômago do pequeno está funcionando como um relógio, sem refluxos registrados.",
    "✨ Que alegria! 💖 Hoje não houve nenhuma regurgitação. O corpinho do seu bebê está recebendo e aproveitando o leite com todo cuidado.",
"✨ Dia tranquilo por aqui! 💕 Nenhum episódio de regurgitação — sinal de que tudo está fluindo bem na barriguinha.",
"✨ Coisa linda de ver! 💖 Hoje o seu bebê passou o dia sem regurgitar, mostrando que está se sentindo confortável e bem.",
"✨ Tudo em harmonia! 💕 Nenhuma regurgitação registrada hoje — o organismo do seu pequeno está respondendo super bem.",
"✨ Mais um dia leve e feliz! 💖 Sem sinais de regurgitação, o que indica uma digestão tranquila e saudável.",
"✨ Que cuidado especial! 💕 Hoje não houve regurgitação, mostrando que o corpinho está lidando muito bem com a alimentação.",
"✨ Excelente notícia! 💖 Zero regurgitação hoje — o bem-estar do seu bebê está em destaque.",
"✨ Dia de calmaria! 💕 Nenhum desconforto com regurgitação, tudo seguindo de forma suave e natural.",
"✨ Que momento gostoso! 💖 Hoje o seu bebê ficou sem regurgitar, indicando conforto e boa adaptação.",
"✨ Tudo indo muito bem! 💕 Sem regurgitação hoje — um sinal de equilíbrio e tranquilidade no organismo do seu pequeno."], leve: ["🔎 Registramos regurgitações leves (${ind.r} vezes). É super comum e faz parte do desenvolvimento digestivo.",
    "🔎 Houve ${ind.r} pequenas regurgitações. O sistema digestivo dele ainda está aprendendo a lidar com o leite, tudo normal!",
    "🔎 Registros leves hoje (${ind.r}x). Siga com os cuidados de sempre, ele está se adaptando bem.",
    "🔎 Observamos ${ind.r} regurgitações leves. Isso é esperado nessa fase e faz parte da adaptação do organismo dele.",
"🔎 Foram registradas ${ind.r} pequenas regurgitações hoje. Nada fora do comum — o corpinho dele ainda está amadurecendo.",
"🔎 Tivemos ${ind.r} episódios leves de regurgitação. Tudo dentro do esperado para o desenvolvimento dele.",
"🔎 Notamos ${ind.r} regurgitações suaves. É algo bastante comum e tende a melhorar com o tempo.",
"🔎 Hoje ocorreram ${ind.r} regurgitações leves. O sistema digestivo dele segue em adaptação, tudo tranquilo.",
"🔎 Registramos ${ind.r} episódios leves. Esse tipo de situação é normal nessa fase e costuma ser passageiro.",
"🔎 Houve ${ind.r} pequenas regurgitações hoje. Ele está no ritmo natural de desenvolvimento.",
"🔎 Foram ${ind.r} ocorrências leves de regurgitação. Sinal de que o organismo dele está aprendendo e evoluindo.",
"🔎 Identificamos ${ind.r} episódios leves hoje. Tudo indica um processo natural de adaptação.",
"🔎 ${ind.r} regurgitações leves foram observadas. Continue com os cuidados — ele está indo muito bem."], alerta: ["💛 A regurgitação foi mais frequente hoje (${ind.r}x). Tente manter o bebê elevado após as mamadas e observe o humor dele.",
    "💛 Notamos ${ind.r} episódios de regurgitação. Se ele parecer irritado ou recusar o peito/mamadeira, vale conversar com o pediatra.",
    "💛 Hoje tivemos ${ind.r} registros. Sei que preocupa, mas foque em manter a calma e elevar a cabeceira após alimentar.",
    "💛 Hoje a regurgitação aconteceu ${ind.r} vezes. Sabemos que pode preocupar, mas manter o bebê um pouquinho elevado após as mamadas pode ajudar bastante.",
"💛 Observamos ${ind.r} episódios de regurgitação hoje. Fique tranquilo(a), isso é comum — apenas mantenha o bebê mais elevado após se alimentar e observe como ele se sente.",
"💛 Foram ${ind.r} episódios hoje. Com carinho e atenção, tente deixar o bebê em posição mais elevada após as mamadas para trazer mais conforto.",
"💛 Hoje tivemos ${ind.r} registros de regurgitação. Você está fazendo um ótimo cuidado — manter o bebê elevado após a alimentação pode ajudar a reduzir esses episódios.",
"💛 Notamos ${ind.r} ocorrências hoje. Se possível, segure o bebê mais erguido após as mamadas — isso costuma trazer mais bem-estar.",
"💛 A regurgitação apareceu ${ind.r} vezes hoje. É compreensível se preocupar, mas pequenas ações como manter o bebê elevado podem fazer diferença.",
"💛 Foram ${ind.r} episódios hoje. Continue com esse cuidado atento — manter o bebê em posição elevada após as mamadas pode ajudar bastante.",
"💛 Hoje observamos ${ind.r} episódios. Vá com calma — manter o bebê um pouco elevado após se alimentar pode ajudar no conforto dele.",
"💛 Tivemos ${ind.r} registros hoje. Tudo bem sentir preocupação — tente manter o bebê mais elevado após as mamadas e observe o bem-estar dele.",
"💛 ${ind.r} episódios de regurgitação foram registrados hoje. Com pequenas adaptações, como manter o bebê elevado, você já está contribuindo para o conforto dele."] },
        fraldas: { baixo: ["Hoje tivemos poucas fraldinhas… pode ser um sinal de que o Gabriel precisa de um pouquinho mais de líquidos 💙",
"Vamos dar uma atenção especial à hidratação do Gabriel hoje? Talvez oferecer mais mamadas ajude bastante 🍼",
"Percebemos menos trocas de fralda hoje. Que tal incentivar o Gabriel a se hidratar um pouco mais?",
"Com carinho, sugerimos observar a ingestão de líquidos do Gabriel — pequenas mudanças podem fazer diferença 😊",
"O Gabriel teve menos fraldas hoje… pode ser um bom momento para reforçar a hidratação com tranquilidade 💧",
"Estamos aqui com você! Talvez o Gabriel se beneficie de um pouco mais de líquidos ao longo do dia 🤍",
"Que tal um cuidado extra com a hidratação do Gabriel hoje? Isso pode ajudar no ritmo das fraldinhas 🌿",
"Notamos uma redução nas trocas. Vamos, juntos, apoiar o Gabriel oferecendo mais líquidos ao longo do dia 💙"], bom: ["Que cuidado lindo! Gabriel está bem hidratado e recebendo todo o carinho que precisa. 💙",
    "Tudo fluindo muito bem! Gabriel demonstra sinais de boa hidratação e alimentação. ✨",
    "Excelente acompanhamento! Gabriel está com um padrão saudável de fraldas molhadas. 🍼",
    "Você está fazendo um trabalho incrível! Gabriel está confortável e bem cuidado. ❤️",
    "Que alegria ver isso! Gabriel está bem hidratado e se desenvolvendo com segurança. 🌟",
    "Muito bom! Gabriel mostra que está se alimentando direitinho e ficando bem hidratado.",
    "Parabéns pelo zelo! Gabriel está com sinais positivos de bem-estar e hidratação. 💙",
    "Tudo indica que Gabriel está recebendo o que precisa — continue assim! ✨",
    "Que cuidado especial! Gabriel está bem e com ótima hidratação. 🍼",
    "Ótimos sinais! Gabriel está confortável, hidratado e bem assistido. ❤️",
    "Que lindo cuidado! Gabriel está bem hidratado e recebendo toda a atenção que merece. 💙",
"Tudo indo perfeitamente! Gabriel apresenta ótimos sinais de hidratação e bem-estar. ✨",
"Acompanhamento impecável! Gabriel está saudável e com excelente padrão de fraldas. 🍼",
"Você está cuidando muito bem! Gabriel está tranquilo, confortável e bem assistido. ❤️",
"Que alegria acompanhar isso! Gabriel está se desenvolvendo com segurança e bem hidratado. 🌟",
"Muito bom mesmo! Gabriel mostra sinais claros de que está bem alimentado e hidratado.",
"Parabéns pelo cuidado diário! Gabriel está com ótimo equilíbrio e bem-estar. 💙",
"Tudo caminhando muito bem! Gabriel está recebendo exatamente o que precisa. ✨",
"Que dedicação bonita! Gabriel está confortável e com hidratação excelente. 🍼",
"Sinais muito positivos! Gabriel está bem cuidado, hidratado e tranquilo. ❤️",
"Que capricho! Gabriel está demonstrando saúde e uma rotina bem equilibrada. 🌟",
"Tudo sob controle! Gabriel está com ótimos sinais de hidratação e conforto. 💙",
"Que cuidado cheio de amor! Gabriel está se mantendo saudável e bem assistido. ✨",
"Muito bem! Gabriel está apresentando um padrão saudável e consistente. 🍼",
"Você está no caminho certo! Gabriel está bem hidratado e se sentindo seguro. ❤️"], otimo: ["Que alegria ver isso! Gabriel está bem hidratado e confortável. 💛",
"Ótimo sinal! Gabriel está recebendo todo o cuidado e atenção que precisa.",
"Parabéns pelo cuidado! Gabriel está se mantendo saudável e bem assistido.",
"Que cuidado lindo! Gabriel está com a hidratação em dia, tudo caminhando perfeitamente.",
"Isso é maravilhoso! Gabriel está respondendo super bem à rotina de cuidados.",
"Excelente! Gabriel está confortável e bem hidratado, um reflexo do seu carinho.",
"Que notícia boa! Gabriel está saudável e sendo muito bem cuidado.",
"Você está fazendo um trabalho incrível! Gabriel está se sentindo seguro e hidratado.",
"Perfeito! Gabriel está com tudo em equilíbrio, sinal de uma rotina muito bem feita.",
"Que ótimo acompanhamento! Gabriel está hidratado e feliz com todo esse cuidado. 🌟",
"Que lindo ver esse cuidado! Gabriel está tranquilo, hidratado e muito bem assistido. 💛",
"Maravilhoso! Gabriel está recebendo tudo o que precisa para se manter saudável e confortável.",
"Que dedicação incrível! Gabriel está em ótimas condições, bem hidratado e acolhido.",
"Isso enche o coração de alegria! Gabriel está bem, confortável e sendo cuidado com muito carinho.",
"Que resultado maravilhoso! Gabriel está saudável e com a hidratação em dia.",
"Que cuidado especial! Gabriel está seguro, hidratado e muito bem acompanhado.",
"Isso é sinal de um cuidado cheio de amor! Gabriel está ótimo e bem assistido.",
"Que alegria acompanhar isso! Gabriel está confortável e com a hidratação perfeita.",
"Você está indo muito bem! Gabriel está saudável, tranquilo e bem hidratado.",
"Que coisa boa! Gabriel está recebendo todo o cuidado necessário e está super bem.",
"Excelente acompanhamento! Gabriel está confortável, hidratado e seguro.",
"Que carinho em cada detalhe! Gabriel está bem cuidado e com tudo em equilíbrio.",
"Isso é simplesmente ótimo! Gabriel está saudável e com a hidratação ideal.",
"Que dedicação bonita! Gabriel está tranquilo, hidratado e muito bem assistido.",
"Que cenário perfeito! Gabriel está confortável e com todos os sinais positivos.",
"Que cuidado tão especial! Gabriel está saudável e recebendo tudo o que precisa.",
"Isso é muito bom de ver! Gabriel está equilibrado, hidratado e bem cuidado.",
"Que acompanhamento impecável! Gabriel está seguro, confortável e saudável.",
"Você está fazendo tudo certo! Gabriel está ótimo e muito bem assistido.",
"Que notícia maravilhosa! Gabriel está confortável, hidratado e cheio de bem-estar. ✨"], excelente: ["Que maravilha! O Gabriel está com uma ótima quantidade de fraldas molhadas hoje. 💙",
    "Isso mostra que o Gabriel está bem hidratado e recebendo todo o cuidado que merece.",
    "Muito bom mesmo! O Gabriel está sendo cuidado com muito carinho e atenção. 🥰",
    "Que alegria ver isso! O Gabriel está saudável e bem hidratado.",
    "Excelente registro hoje! O Gabriel está em ótimas condições. 🌟",
    "Tudo certinho por aqui! O Gabriel está recebendo um cuidado lindo de se ver.",
    "Parabéns pelo cuidado! O Gabriel demonstra estar confortável e bem assistido. 👏",
    "Que cuidado especial! O Gabriel está muito bem hidratado e tranquilo. ❤️",
    "Que coisa mais linda de acompanhar! O Gabriel está com uma hidratação excelente hoje. 💙",
    "Tudo fluindo perfeitamente! O Gabriel está recebendo exatamente o que precisa.",
    "Que registro maravilhoso! O Gabriel está confortável e muito bem cuidado. 🥰",
    "Isso é um ótimo sinal! O Gabriel está saudável e sendo acompanhado com muito carinho.",
    "Que tranquilidade ver isso! O Gabriel está super bem hidratado. 🌟",
    "Cuidado impecável! O Gabriel mostra que está sendo assistido com muita atenção.",
    "Que alegria! O Gabriel está em um ritmo ótimo e cheio de bem-estar. ❤️",
    "Tudo indo muito bem por aqui! O Gabriel está seguro, confortável e bem hidratado.",
    "Que dedicação linda! O Gabriel está respondendo super bem aos cuidados.",
    "Perfeito! O Gabriel está com uma rotina muito saudável hoje. 👏",
    "Isso aquece o coração! O Gabriel está sendo cuidado com muito amor.",
    "Que excelente sinal! O Gabriel está tranquilo e bem assistido.",
    "Tudo dentro do esperado e com muito carinho envolvido. O Gabriel está ótimo! 💙",
    "Que bom ver esse cuidado! O Gabriel está confortável e feliz.",
    "Registro incrível! O Gabriel está com uma hidratação ideal hoje.",
    "Muito bom mesmo! O Gabriel está em ótimas condições e bem cuidado. 🌟",
    "Que capricho! O Gabriel está recebendo atenção em cada detalhe.",
    "Que evolução bonita de acompanhar! O Gabriel está indo super bem.",
    "Tudo equilibrado e saudável! O Gabriel está sendo muito bem assistido. ❤️",
    "Que cuidado tão especial! O Gabriel está demonstrando bem-estar e tranquilidade."] },
    analise_cruzada: {
            alerta_sono_alimentacao: [
                "⚠️ Notei que o Gabriel mamou pouco e também dormiu menos do que o habitual. Ele pode estar passando por um salto de desenvolvimento ou com algum pequeno desconforto. Ofereça mais colinho e hidratação.",
                "⚠️ A combinação de pouco sono e alimentação reduzida requer atenção especial hoje. Tente criar um ambiente bem calmo e oferecer o peito com mais frequência.",
                "⚠️ Gabriel parece estar com dificuldade para relaxar e se alimentar no ritmo ideal. Um banho morno e muito aconchego podem ajudar."
            ],
            bom_desenvolvimento: [
                "🌟 Hoje foi um dia espetacular! Gabriel mamou de forma excelente e descansou maravilhosamente bem. Rotina em perfeita harmonia!",
                "🌟 Uma rotina de ouro: boas mamadas, fraldas indicando ótima hidratação e um soninho reparador. Parabéns pelo cuidado impecável!",
                "🌟 Tudo fluiu incrivelmente! Quando a alimentação e o descanso entram nessa sintonia, o desenvolvimento do bebê agradece."
            ],
            alta_amamentacao_desconforto: [
                "🍼 Gabriel mamou bastante, mas notei pequenos episódios de regurgitação. Tente deixá-lo bem elevado por uns 20 a 30 minutos após cada mamada.",
                "🍼 O ritmo de amamentação está alto e isso pode sobrecarregar a digestão. Fique de olho e lembre de manter a cabeceira mais elevada."
            ]
        }
    };
    
    let charts = {};

    // ==========================
// 🧠 CHAT ÁUREA - LÓGICA CORRIGIDA
// ==========================
let baseFAQ = null;

async function carregarFAQ() {
    try {
        const res = await fetch('aurea_faq.json');
        if (res.ok) {
            baseFAQ = await res.json();
            console.log("✅ FAQ carregado com sucesso.");
        } else {
            throw new Error();
        }
    } catch (e) {
        console.warn("⚠️ Usando FAQ interno (fallback).");
        baseFAQ = FALLBACK_FAQ;
    }
}

// Inicializa o FAQ ao carregar
carregarFAQ();

function normalizarTexto(texto) {
    return texto.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, "");
}

function similaridade(a, b) {
    const wordsA = a.split(/\s+/).filter(Boolean);
    const wordsB = b.split(/\s+/).filter(Boolean);
    let score = 0;
    wordsA.forEach(w => {
        if (wordsB.includes(w)) score += 2;
    });
    return score / (wordsB.length || 1);
}

function responderPeloFAQ(pergunta) {
    if (!baseFAQ || !baseFAQ.intents) return null;

    const texto = normalizarTexto(pergunta);
    let melhorResposta = null;
    let melhorScore = 0;

    baseFAQ.intents.forEach(intent => {
        let score = 0;
        if (intent.keywords) {
            intent.keywords.forEach(k => {
                if (texto.includes(normalizarTexto(k))) score += 4;
            });
        }
        if (score > melhorScore) {
            melhorScore = score;
            const respostas = intent.responses || [intent.response];
            melhorResposta = respostas[Math.floor(Math.random() * respostas.length)];
        }
    });

    return (melhorScore >= 2.5) ? melhorResposta : null;
}

async function consultarIAGenerativa(pergunta) {
    const URL_IA = "https://script.google.com/macros/s/AKfycbxUkhYoPvBOYR-Sguj23SzWizhZb3mpKKMVgnkg0RUWNZ8D9Jm2W-UO-XgjpP-pgoQ/exec";

    const promptSistema = `Você é a Áurea, uma assistente virtual acolhedora e especialista em maternidade. Responda de forma curta (máximo 3 frases) e gentil. Nunca dê diagnósticos médicos.`;

    try {
        const response = await fetch(URL_IA, {
            method: "POST",
            body: JSON.stringify({
                prompt: `${promptSistema}\n\nPergunta da mãe: ${pergunta}`
            })
        });

        const data = await response.json();
        // Ajuste o caminho abaixo conforme o retorno do seu Google Apps Script
        return data.resposta || data.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch (error) {
        console.error("Erro na chamada da IA:", error);
        return null;
    }
}

async function sendMessage() {
    const input = document.getElementById("userInput");
    const texto = input.value.trim();
    if (!texto) return;

    // 1. Mostrar mensagem do usuário
    appendMsg(texto, "user");
    input.value = "";

    // 2. Mostrar indicador de digitando
    const loadingMsg = createTypingIndicator();
    document.getElementById("chatBody").appendChild(loadingMsg);

    // 3. Tentar FAQ primeiro, depois IA
    let resposta = responderPeloFAQ(texto);
    
    if (!resposta) {
        resposta = await consultarIAGenerativa(texto);
    }

    if (!resposta) {
        resposta = "Ainda estou aprendendo sobre isso 💛 Pode tentar reformular ou falar com o pediatra?";
    }

    // 4. Remover indicador e mostrar resposta
    removeTypingIndicator();
    const msgDiv = appendMsg("", "aurea");
    await typeWriter(msgDiv, resposta);
}

// Funções de UI Auxiliares
function appendMsg(texto, sender) {
    const chatBody = document.getElementById("chatBody");
    const msgDiv = document.createElement("div");
    msgDiv.className = `msg ${sender}`;
    msgDiv.textContent = texto;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return msgDiv;
}

function removeTypingIndicator() {
    const indicators = document.querySelectorAll('.thinking');
    indicators.forEach(el => el.remove());
}
    // ==========================
    // 📊 DADOS E GRÁFICOS
    // ==========================
    function updateChart(id, ctxId, label, dias, color) {
        if (charts[id]) charts[id].destroy();
        const canvas = document.getElementById(ctxId); if (!canvas) return;
        const ctx = canvas.getContext('2d');
        charts[id] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(dias),
                datasets: [{ label, data: Object.values(dias).map(d => d[id]), borderColor: color, tension: 0.4, fill: false }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }

    function popularFiltro(dados) {
        const s = document.getElementById("filtroData");
        s.innerHTML = '<option value="todos">Todo o Histórico</option>';
        const datas = [...new Set(dados.map(item => new Date(item.Data).toLocaleDateString('pt-BR')))].sort((a,b) => b.split('/').reverse().join('').localeCompare(a.split('/').reverse().join('')));
        datas.forEach(d => { const o = document.createElement("option"); o.value = d; o.textContent = d; s.appendChild(o); });
    }

    function aplicarFiltro() {
        const v = document.getElementById("filtroData").value;
        const f = v === "todos" ? dadosOriginais : dadosOriginais.filter(i => new Date(i.Data).toLocaleDateString('pt-BR') === v);
        processar(f);
    }

    function processar(dados) {
        let ind = { m:0, s:0, f:0, d:0, r:0 }, dias = {};
        dados.forEach(item => {
            let data = new Date(item.Data).toLocaleDateString('pt-BR');
            if (!dias[data]) dias[data] = { m:0, s:0, f:0, d:0 };
            let at = (item.Atividade || "").toLowerCase();
            let obs = (item.Observação || "").toLowerCase();
            if (at.includes("amamentacao")) { ind.m++; dias[data].m++; }
            if (at.includes("sono")) { ind.s++; dias[data].s++; }
            if (at.includes("fralda") || at.includes("xixi") || at.includes("coco")) { ind.f++; dias[data].f++; }
            if (at.includes("medicacao") || at.includes("remedio")) { ind.d++; dias[data].d++; }
            if (obs.includes("regurg")) ind.r++;
        });
        gerarIA(ind);
        updateChart('m', 'chartMamada', 'Mamadas', dias, '#ff477e');
        updateChart('s', 'chartSono', 'Sono', dias, '#3b82f6');
        updateChart('f', 'chartFralda', 'Fraldas', dias, '#10b981');
        updateChart('d', 'chartMed', 'Medicação', dias, '#8b5cf6');
    }

    function gerarIA(ind) {
        const getF = (lista) => lista[Math.floor(Math.random() * lista.length)];
        let insights = [];

        // 1. ANÁLISE CRUZADA (A "Mágica" do código)
        if (ind.m < 5 && ind.s < 3) {
            insights.push(`<div class="relatorio-item cruzado-alerta">${getF(frasesIA.analise_cruzada.alerta_sono_alimentacao)}</div>`);
        } else if (ind.m >= 7 && ind.s >= 5) {
            insights.push(`<div class="relatorio-item cruzado-bom">${getF(frasesIA.analise_cruzada.bom_desenvolvimento)}</div>`);
        } else if (ind.m > 10 && ind.r > 2) {
            insights.push(`<div class="relatorio-item cruzado-alerta">${getF(frasesIA.analise_cruzada.alta_amamentacao_desconforto)}</div>`);
        }

        // 2. INSIGHTS INDIVIDUAIS (Fallback caso não caia em cruzada ou complementar)
        insights.push(`<div class="relatorio-item">🍼 ${ind.m < 5 ? getF(frasesIA.amamentacao.baixo) : getF(frasesIA.amamentacao.ideal)}</div>`);
        insights.push(`<div class="relatorio-item">🧷 ${ind.f < 5 ? getF(frasesIA.fraldas.baixo) : getF(frasesIA.fraldas.otimo)}</div>`);

        document.getElementById("relatorioIA").innerHTML = insights.join("");
    }
    async function init() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('app-content');
    
    try {
        // Carrega frases personalizadas
        try {
            const resF = await fetch('frases.json');
            if (resF.ok) frasesIA = await resF.json();
        } catch(e) { 
            console.warn("Usando frases padrão."); 
        }

        const resD = await fetch(API);
        if (!resD.ok) throw new Error();
        dadosOriginais = await resD.json();
        
        loader.style.opacity = '0';
        setTimeout(() => { 
            loader.style.visibility = 'hidden'; 
            content.style.visibility = 'visible'; 
            content.style.opacity = '1'; 
        }, 600);
        
        popularFiltro(dadosOriginais);
        processar(dadosOriginais);
    } catch (e) {
        document.getElementById("relatorioIA").innerHTML = "❌ Erro ao carregar dados da planilha.";
        loader.style.display = 'none';
        content.style.visibility = 'visible';
        content.style.opacity = '1';
    }
}

// Inicialização
(async function() {
    await carregarFAQ();
    init();
})();
