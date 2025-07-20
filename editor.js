export default async function handler(args) {
  const { command, titolo, tipo_video, note_extra, script, tipologia } = args;

  if (command === "generate_structure") {
    return await generaStruttura(titolo, tipo_video, note_extra);
  }

  if (command === "generate_assets") {
    return await generaAssets(titolo, script, tipologia);
  }

  return { error: "Comando non riconosciuto" };
}

async function generaStruttura(titolo, tipo_video, note) {
  const contesto = `Crea la struttura per un video del canale YouTube "Anime Oscure", che tratta di true crime italiano in stile Netflix, con narrazione asciutta e investigativa.`;
  
  let struttura;
  if (tipo_video === "episodio") {
    struttura = `
HOOK iniziale (coinvolgente e diretto)
Intro + CTA per iscrizione
10 Capitoli da massimo 500 caratteri ciascuno
Outro con chiusura memorabile
Sottotitolo coerente con il contenuto`;
  } else if (tipo_video === "top10") {
    struttura = `
Intro top 10 + CTA
10 voci classificate
Menzioni onorevoli
Outro conclusiva`;
  } else {
    struttura = `Tipo di video non riconosciuto`;
  }

  return {
    struttura,
    istruzioni: contesto,
    note: note || "Nessuna nota extra."
  };
}

async function generaAssets(titolo, script, tipologia) {
  return {
    titoloSEO: `Scrivi un titolo virale e diretto per "${titolo}", massimo 80 caratteri`,
    descrizioneYouTube: `Crea una descrizione ottimizzata per YouTube e Google basata su questo script:\n${script}`,
    hashtag: ["#TrueCrime", "#AnimeOscure", "#Mafia", "#Camorra"],
    CTA: `Invita gli spettatori a iscriversi, commentare e attivare la campanella.`,
    miniature: [
      "Miniatura 1: volto drammatico in primo piano, scritta in maiuscolo (max 5 parole)",
      "Miniatura 2: oggetto simbolico del crimine, sfondo cupo, texture crime",
      "Miniatura 3: immagine d’archivio sgranata con effetto poster HBO"
    ]
  };
}
