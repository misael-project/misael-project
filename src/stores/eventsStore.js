import { atom } from 'nanostores';

export const title = atom('test title');

export const updateTitle = (newTitle) => {
    title.set(newTitle)
}