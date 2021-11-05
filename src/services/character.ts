import { getCharacter as getCharacterFromRickmortyapi } from 'rickmortyapi'
import { ApiResponse, Character } from 'rickmortyapi/dist/interfaces';

export const getCharacter = async (characterId: number) => {
    const apiResponse:ApiResponse<Character> = await getCharacterFromRickmortyapi(characterId)
    return apiResponse.data;
};

