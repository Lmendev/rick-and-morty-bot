import { getCharacter } from 'rickmortyapi'

export class Character {
    public async getCharacter (characterId: number) {
        const character = await getCharacter(characterId)
        return character;
    };
}
