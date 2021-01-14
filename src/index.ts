import { Context, APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (
    event,
    _context: Context
) => {

    return {
        statusCode: 200,
        body: "ok",
        headers: {
            "Content-Type": "text/plain"
        }
    };
}