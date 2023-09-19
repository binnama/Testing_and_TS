
// a)
const genders: string[] = ['male', 'female', 'other']
const firstName: string = "Marius"
const age: number = 38
const gender: string = genders[0]
const hasKids: boolean = true
const data = { name: firstName, age: age, gender: gender }


// b)
const items: { id: number, name: string} [] = [{
	id: 1,
	name: "Sara"
}]

function run(doc: any[]): boolean {
	return doc.length > 0
}

run(items)

// c)
const validateAge = (age: number) => {
	if(age < 18) {
		return { allowed: false, data: 'Use bike' }
	}
	if(age < 100) {
		return { allowed: true, data: 'Drive your own car' }
	}
	if(age === 18) {
		return { allowed: true, data: 'Drive your dads card' }
	}
}