import type { SignInRequest } from '~/types/auth/auth';
import type  {GraphQLResponse} from "~/types/common/response";

export const useLogin = async (signIn: SignInRequest) : Promise<boolean> => {
    const query = `
    mutation Login($input: LoginInput!) {
      login(input: $input)
    }
  `;

    const variables = {
        input: {
            email: signIn.email,
            rawPassword: signIn.rawPassword
        }
    };

    try {
        const response = await $fetch<GraphQLResponse<{login :string}>>('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                query,
                variables
            }
        });

        if (response.errors) {
            console.error("GraphQL error:", response.errors);
            return false
        }
        return true
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};
