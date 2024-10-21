import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('quiz.db');

export const playground = () => db.withExclusiveTransactionAsync(async (txn) => {
    await txn.execAsync(`
        CREATE TABLE IF NOT EXISTS tbl_question (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            question_text TEXT NOT NULL,
            correctly_alt TEXT NOT NULL, 
            alt_A TEXT NOT NULL, 
            alt_B TEXT NOT NULL, 
            alt_C TEXT NOT NULL
        );
    `)
});
