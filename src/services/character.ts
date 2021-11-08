import { getCharacter as getCharacterFromRickmortyapi } from 'rickmortyapi'
import { ApiResponse, Character } from 'rickmortyapi/dist/interfaces';

export const getCharacter = async (characterId: number) => {
    const apiResponse:ApiResponse<Character> = await getCharacterFromRickmortyapi(characterId)
    return apiResponse.data;
};

export const getRandomCharacter = async () => {
    const id = Math.floor(Math.random() * 826) + 1;

    const apiResponse:ApiResponse<Character> = await getCharacterFromRickmortyapi(id)
    return apiResponse.data;
};



