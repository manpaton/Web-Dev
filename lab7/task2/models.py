class Person:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def sayHello(self):
        return f'Hello, my name is {self.name}!'

    def haveBirthday(self):
        self.age+=1
        return f"Happy birthday! You are now {self.age} years old."

    def __str__(self):
        return f'Person(name={self.name}, age={self.age}, gender={self.gender})'


class Student(Person):
    def __init__(self, name, age, gender, id, GPA):
        super().__init__(name, age, gender)
        self.id = id
        self.GPA = GPA

    def sayHello(self):
        return f'Hello, my name is {self.name}! and I am student'

    def study(self):
        self.GPA +=0.05
        return f"{self.name} studied and now has GPA: {self.GPA}"


class Employee(Person):
    def __init__(self, name, age, gender, id, salary):
        super().__init__(name, age, gender)
        self.id = id
        self.salary = salary

    def sayHello(self):
        return f'Hello, my name is {self.name} and I am employee'

    def work(self):
        self.salary+=100
        return f"{self.name} worked and now has salary: {self.salary}"