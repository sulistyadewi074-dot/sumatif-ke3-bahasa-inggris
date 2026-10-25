import { Question, LevelKognitif, Difficulty, QuestionType } from '../types';

export interface KisiKisiItem {
  id: number;
  elemen: string;
  cp: string;
  tp: string;
  indikator: string;
  levelKognitif: LevelKognitif;
  bobotSkor: number;
}

const ELEMEN_DEFAULT = 'Menyimak - Berbicara, Membaca - Memirsa, Menulis - Mempresentasikan (Bahasa Inggris Fase C)';

const CP_DEFAULT =
  'Peserta didik mampu memahami, mengidentifikasi, dan mengklasifikasikan kosakata The Animal Kingdom (mammals, reptiles, amphibians, fish, birds) beserta karakteristik habitat, ciri fisik, pernapasan, dan cara berkembang biak, serta memahami dan menerapkan struktur Simple Past Tense (regular/irregular verbs, to be "was/were", time markers) dalam teks lisan dan tulis deskriptif maupun naratif kontekstual.';

const TP_1 =
  'Mengidentifikasi, mengklasifikasikan, dan mendeskripsikan ciri-ciri 5 kelompok The Animal Kingdom (mammals, reptiles, amphibians, fish, and birds) serta habitat, cara bernapas, dan perkembangbiakannya.';
const TP_2 =
  'Mengenal, mengidentifikasi, dan menerapkan kalimat Simple Past Tense (penggunaan regular verbs bertakhiran -ed, irregular verbs, to be was/were, serta past time markers) dalam kalimat dan teks narasi lampau.';
const TP_3 =
  'Menganalisis, mengintegrasikan, dan memproduksi kalimat terpadu Simple Past Tense bertema pengalaman mengamati dan mempelajari The Animal Kingdom secara kontekstual.';

export const KISI_KISI_MAP: Record<number, KisiKisiItem> = {
  // --- BAGIAN I: PILIHAN GANDA (10 BUTIR: NO. 1 - 10) ---
  1: {
    id: 1,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan deskripsi tentang mamalia laut (dolphin dan whale), peserta didik dapat mengidentifikasi alasan lumba-lumba dan paus diklasifikasikan sebagai mamalia (bernapas dengan paru-paru dan menyusui anaknya).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    id: 2,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan infografis bagan klasifikasi 5 kelompok The Animal Kingdom, peserta didik dapat menentukan hewan yang tergolong kelompok burung (Aves) meskipun tidak dapat terbang di udara (penguin).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    id: 3,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan teks mengenai katak yang hidup di dua alam dan mengalami metamorfosis, peserta didik dapat menentukan kelompok hewan tersebut (amphibians).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    id: 4,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan ciri-ciri fisik kulit bersisik kering dan berdarah dingin pada komodo dan penyu, peserta didik dapat menentukan kelompok hewannya (reptiles).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    id: 5,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan deskripsi ikan air tawar/laut, peserta didik dapat menentukan organ pernapasan utama ikan untuk menyerap oksigen dalam air (gills / insang).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    id: 6,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kalimat rumpang berlatar kunjungan ke taman safari pada masa lampau, peserta didik dapat melengkapi dengan kata kerja lampau beraturan (regular past verb: visited).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    id: 7,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kalimat rumpang dengan keterangan waktu yesterday, peserta didik dapat memilih bentuk kata kerja lampau tak beraturan (irregular verb: saw) yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    id: 8,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kalimat lampau dengan subjek tunggal (the tiger), peserta didik dapat menentukan to be bentuk lampau yang tepat (was).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    id: 9,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kalimat lampau dengan subjek jamak (flamingos / we), peserta didik dapat menentukan to be bentuk lampau yang tepat (were).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    id: 10,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kalimat negatif Simple Past Tense rumpang, peserta didik dapat menentukan kata kerja bantu negatif lampau (did not) yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR: NO. 11 - 15) ---
  11: {
    id: 11,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan beberapa pernyataan mengenai ciri-ciri dan contoh hewan mamalia, peserta didik dapat memilih lebih dari satu pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    id: 12,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan daftar beberapa hewan, peserta didik dapat memilih semua hewan yang termasuk ke dalam kelompok reptil (reptiles).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    id: 13,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan daftar pasangan kata kerja dasar (V1) dan bentuk lampaunya (V2), peserta didik dapat memilih semua bentuk irregular past verbs yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    id: 14,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan beberapa keterangan waktu dalam bahasa Inggris, peserta didik dapat memilih semua penanda waktu yang digunakan untuk Simple Past Tense.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    id: 15,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan karakteristik adaptasi tubuh kelompok burung (feathers, hollow bones) dan ikan (fins, streamlined body), peserta didik dapat menganalisis beberapa pernyataan adaptasi yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN III: PGK KATEGORI / BENAR-SALAH (5 BUTIR: NO. 16 - 20) ---
  16: {
    id: 16,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan 4 pernyataan mengenai klasifikasi vertebrata The Animal Kingdom, peserta didik dapat menilai kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    id: 17,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan 4 pernyataan kaidah tata bahasa Simple Past Tense (penggunaan did not + V1, to be was/were, irregular verb), peserta didik dapat memvalidasi kebenaran (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    id: 18,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan 4 pernyataan perbandingan antara reptil dan amfibi (kulit, telur, metamorfosis), peserta didik dapat menentukan status kebenaran (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    id: 19,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan 4 kalimat dalam bahasa Inggris bertema kegiatan di kebun binatang, peserta didik dapat menganalisis ketepatan struktur kalimat Simple Past Tense (Benar/Salah).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  20: {
    id: 20,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan 4 pernyataan mengenai cara bernapas dan perkembangbiakan hewan (paus, burung, katak, ikan), peserta didik dapat mengevaluasi kebenaran pernyataan (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN IV: MENJODOHKAN (5 BUTIR: NO. 21 - 25) ---
  21: {
    id: 21,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menjodohkan nama hewan (Kangaroo, King Cobra, Tree Frog, Peacock) di kolom kiri dengan kelompok Animal Kingdom yang sesuai di kolom kanan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    id: 22,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat menjodohkan kata kerja bentuk dasar V1 (eat, fly, swim, catch) dengan bentuk lampau tidak beraturannya (irregular V2: ate, flew, swam, caught).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    id: 23,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menjodohkan jenis hewan (Goldfish, Blue Whale, Adult Frog, Bald Eagle) dengan organ pernapasan utamanya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    id: 24,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat menjodohkan subjek kalimat lampau (The fierce lion, The zookeepers, My sister and I, A green chameleon) dengan to be lampau yang sesuai (was atau were).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    id: 25,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menjodohkan kelompok hewan (Birds, Mammals, Reptiles, Fish) dengan ciri penutup tubuh utamanya (Feathers, Hair or Fur, Dry scales, Wet slimy scales).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN V: ISIAN SINGKAT (5 BUTIR: NO. 26 - 30) ---
  26: {
    id: 26,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kalimat rumpang dengan penanda waktu lampau "last Sunday", peserta didik dapat menuliskan bentuk lampau (V2) dari kata kerja "go" (went).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    id: 27,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan deskripsi hewan berbulu unggas, memiliki paruh, bersayap dua, dan bertelur cangkang keras, peserta didik dapat menuliskan nama kelompok hewannya (birds / aves).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    id: 28,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kalimat rumpang lampau dengan subjek jamak "the penguins", peserta didik dapat menuliskan to be lampau yang tepat (were).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    id: 29,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan definisi hewan yang memiliki rambut/bulu, bernapas dengan paru-paru, dan menyusui bayinya, peserta didik dapat menuliskan nama kelompoknya (mammals / mamalia).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    id: 30,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan kalimat rumpang dengan keterangan "two days ago", peserta didik dapat menuliskan bentuk past tense dari regular verb "climb" (climbed).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAGIAN VI: URAIAN / ESSAY TERBUKA (5 BUTIR: NO. 31 - 35) ---
  31: {
    id: 31,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menyebutkan kelima (5) kelas utama vertebrata dalam The Animal Kingdom beserta 1 (satu) contoh hewan untuk masing-masing kelas secara lengkap.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  32: {
    id: 32,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menjelaskan 2 (dua) perbedaan mendasar antara kelompok Mammals dan Reptiles ditinjau dari penutup tubuh dan cara perkembangbiakannya.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  33: {
    id: 33,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat menjelaskan perbedaan antara regular verbs dan irregular verbs dalam Simple Past Tense serta memberikan masing-masing 2 (dua) contoh kata kerjanya.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  34: {
    id: 34,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menguraikan alasan katak digolongkan sebagai hewan amfibi, tahapan metamorfosisnya, dan perubahan organ pernapasannya dari kecebong hingga dewasa.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  35: {
    id: 35,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Peserta didik dapat menyusun paragraf narasi pendek (3-4 kalimat) dalam Simple Past Tense tentang pengalaman berkunjung ke kebun binatang yang memuat penanda waktu lampau, minimal 2 kata kerja lampau, dan 2 nama hewan beserta kelompoknya.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
};

/**
 * Memperkaya objek pertanyaan dengan metadata kisi-kisi Kurikulum Merdeka
 */
export function enrichQuestion(question: Question): Question {
  const item = KISI_KISI_MAP[question.id];
  if (!item) {
    return {
      ...question,
      elemen: question.elemen || ELEMEN_DEFAULT,
      cp: question.cp || CP_DEFAULT,
      tp: question.tp || TP_1,
      indikator: question.indikator || `Indikator butir soal nomor ${question.id}`,
      levelKognitif: question.levelKognitif || 'L2',
      bobotSkor: question.bobotSkor || (question.type === 'uraian' ? 2 : 1),
    };
  }

  return {
    ...question,
    elemen: question.elemen || item.elemen,
    cp: question.cp || item.cp,
    tp: question.tp || item.tp,
    indikator: question.indikator || item.indikator,
    levelKognitif: question.levelKognitif || item.levelKognitif,
    bobotSkor: question.bobotSkor || item.bobotSkor,
  };
}

export interface KisiKisiSummaryStats {
  totalSoal: number;
  totalSkor: number;
  elemenCounts: Record<string, number>;
  levelCounts: {
    L1: { count: number; percent: number; label: string };
    L2: { count: number; percent: number; label: string };
    L3: { count: number; percent: number; label: string };
  };
  difficultyCounts: {
    Mudah: { count: number; percent: number };
    Sedang: { count: number; percent: number };
    Sukar: { count: number; percent: number };
  };
  typeCounts: Record<QuestionType, number>;
}

/**
 * Menghitung rekapitulasi statistik kisi-kisi secara otomatis
 */
export function calculateKisiKisiStats(questions: Question[]): KisiKisiSummaryStats {
  const total = questions.length || 1;
  let totalScore = 0;

  const elemenCounts: Record<string, number> = {};
  const levelRaw = { L1: 0, L2: 0, L3: 0 };
  const diffRaw = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCounts: Record<QuestionType, number> = {
    pg: 0,
    pgk: 0,
    pgk_kategori: 0,
    menjodohkan: 0,
    isian: 0,
    uraian: 0,
  };

  questions.forEach((q) => {
    const enriched = enrichQuestion(q);
    const score = enriched.bobotSkor || (q.type === 'uraian' ? 2 : 1);
    totalScore += score;

    const el = enriched.elemen || ELEMEN_DEFAULT;
    elemenCounts[el] = (elemenCounts[el] || 0) + 1;

    const lvl =
      enriched.levelKognitif ||
      (enriched.difficulty === 'Mudah' ? 'L1' : enriched.difficulty === 'Sedang' ? 'L2' : 'L3');
    if (lvl in levelRaw) {
      levelRaw[lvl as keyof typeof levelRaw] += 1;
    }

    const diff = enriched.difficulty || 'Sedang';
    if (diff in diffRaw) {
      diffRaw[diff as keyof typeof diffRaw] += 1;
    }

    if (q.type in typeCounts) {
      typeCounts[q.type as keyof typeof typeCounts] += 1;
    }
  });

  return {
    totalSoal: questions.length,
    totalSkor: totalScore,
    elemenCounts,
    levelCounts: {
      L1: {
        count: levelRaw.L1,
        percent: Math.round((levelRaw.L1 / total) * 100),
        label: 'L1 - Remembering & Understanding (Pemahaman Dasar)',
      },
      L2: {
        count: levelRaw.L2,
        percent: Math.round((levelRaw.L2 / total) * 100),
        label: 'L2 - Applying & Analyzing (Penerapan & Analisis)',
      },
      L3: {
        count: levelRaw.L3,
        percent: Math.round((levelRaw.L3 / total) * 100),
        label: 'L3 - Reasoning & Creating HOTS (Penalaran Tingkat Tinggi)',
      },
    },
    difficultyCounts: {
      Mudah: { count: diffRaw.Mudah, percent: Math.round((diffRaw.Mudah / total) * 100) },
      Sedang: { count: diffRaw.Sedang, percent: Math.round((diffRaw.Sedang / total) * 100) },
      Sukar: { count: diffRaw.Sukar, percent: Math.round((diffRaw.Sukar / total) * 100) },
    },
    typeCounts,
  };
}
