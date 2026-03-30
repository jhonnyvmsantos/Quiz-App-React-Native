import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('quiz.db');

export const dropTable = async () => {
    db.execAsync('DROP TABLE IF EXISTS tbl_question;');
    console.warn("Table Dropped!")
}

export const playground = async () => {    
    db.execAsync(`
        CREATE TABLE IF NOT EXISTS tbl_question (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            question_text TEXT NOT NULL,
            correctly_alt TEXT NOT NULL, 
            alt_A TEXT NOT NULL, 
            alt_B TEXT NOT NULL, 
            alt_C TEXT NOT NULL
        );
    `).then(() => {
        console.log("Database Create.")
    }).catch(() => {
        console.warn("Error Creating Database.")
    })
};
