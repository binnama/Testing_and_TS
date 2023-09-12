export type Response = {
  id: string
  answer: string
  score: number
  category: string
  questionId: string
}

/*
const response : Response = {
  id: "",
  answer: "",
  score: 1,
  category: "",
  questionId: ""
}
*/

export type Faker = {
  id: () => string
  score: () => number
  category: () => string
  answer: () => string
}
/*
const faker: Faker = {
  id: () => "",
  score: () => 1,
  category: () => "",
  answer: () => "",
}
*/

export type CreateResponseParams = {
  existingResponses?: Map<string, Response>
  count: number
  faker: Faker
}
/*
const existingResponses : Map<String, response>([["response-id", response]])

const createResponseParams: CreateResponseParams = {
  existingResponses,
  count: 10,
  faker
}
*/

export type CreateResponses = (
  params: CreateResponseParams,
) => Map<string, Response>
