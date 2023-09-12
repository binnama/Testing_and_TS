export type Response = {
  id: string
  answer: string
  score: number
  category: string
  questionId: string
}

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

const createResponseParams: CreateResponseParams = {}

export type CreateResponses = (
  params: CreateResponseParams,
) => Map<string, Response>
