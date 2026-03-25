from models import Person, Student, Employee

people = [
    Person("Alice", 25, "Female"),
    Student("Bob", 20, "Male", 101, 3.5),
    Employee("Charlie", 30, "Male", 202, 50000)
]

for person in people:
    print(person)
    print(person.sayHello())
    if isinstance(person, Student):
        print(person.study())
    if isinstance(person, Employee):
        print(person.work())
    print("-" * 40)