# kata-hand-programming-language

## Objective

The goal of this kata is to apply and refine TDD (Test-Driven Development) and Extreme Programming techniques by developing an interpreter for a language based on emojis.

Link to the original [description](https://github.com/F0rno/kata-Hand-Programming-Language/#hand-programming-language-kata).

### Functioning

This language modifies an indefinite-sized memory, composed of cells initialized to 0.

* 👉 moves the memory pointer to the next cell.
* 👈 moves the memory pointer to the previous cell.
* 👆 increases the value of the current memory cell.
* 👇 decreases the value of the current memory cell.
* 👊 displays the value of the current cell according to its ASCII equivalence.
* 🤜 if the memory cell at the current position has a value of 0, jump right after the corresponding 🤛.
* 🤛 if the memory cell at the current position has a non-zero value, jump right after the corresponding 🤜.

#### [⚠️](https://emojiterra.com/es/senal-de-advertencia/) *Clarifications* [⚠️](https://emojiterra.com/es/senal-de-advertencia/)

- Memory cells are bytes, with a value from 0 to 255.
  - Decreasing 0 will result in 255.
  - Increasing 255 will result in 0.
- Memory starts at position 0.
- Memory can be increased “infinitely”, but if you decrease the memory address 0, you must return the highest known memory address.

## Challenges

#### **1. Increase the memory pointer `👉`**

* Move from memory position 0 to 1.
* Move from memory position 1 to 2.
* Move from memory position 255 to 256.
* Move from memory position 256 to 257.

#### **2. Decrease the memory pointer `👈`**

* Move from memory position 3 to 2.
* Move from memory position 2 to 1.
* Move from memory position 1 to 0.

`From here, you should consider implementing the data structure that will act as memory.`

* Move from memory position 0 to the highest known position.

#### **3. Read memory positions**

* Set the following memory addresses to these values:
  * 0 = 1
  * 1 = 2
  * 2 = 3
* Read the memory value at position 0 and get 1.
* Read the memory value at position 1 and get 2.
* Read the memory value at position 2 and get 3.
* Read the value of the highest known memory position and get 3.
* Read the memory value at position 3 and get 0.

#### **4. Increase the value of memory positions `👆`**

* Increase a cell with value 0 to 1.
* Increase a cell with value 1 to 2.
* Increase a cell with value 2 to 3.
* Increase a cell with value 255 to 0.

#### **5. Decrease the value of a memory position `👇`**

* Decrease a cell with value 3 to 2.
* Decrease a cell with value 2 to 1.
* Decrease a cell with value 1 to 0.
* Decrease a cell with value 0 to 255.

#### 6. Write to memory positions

* Write 1 in position 0.
* Write 2 in position 1.
* Write 3 in position 2.
* Write 4 in position 3.

#### 7. Get the ASCII character `👊`

* From a cell with value 65, get its ASCII value, "A".
* From a cell with value 66, get its ASCII value, "B".
* From a cell with value 67, get its ASCII value, "C".
* From a cell with value 68, get its ASCII value, "D".

#### **8. Execute the following emojis to get their respective messages**

* A
  * [Long sequence of 👆 followed by 👊]
* B
  * [Long sequence of 👇 followed by 👊]
* C
  * [Long sequence of 👆 followed by 👊]
* Hello
  * [Long sequence of 👇 followed by 👊, then a series of 👉, 👆, and 👊]

#### **9. Conditionals (`🤜` and `🤛`)**

* When encountering a `🤜`, make the program's execution pointer jump to the corresponding `🤛` if the current memory cell value is 0.
  * Test cases
    * 🤜👆🤛
    * 👆🤜👆🤛
 * A
    * 👆🤛👆🤜👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👊
  * B
    * 🤛👆🤜👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊
* When encountering a `🤛`, make the program's execution pointer jump to the corresponding `🤜` if the current memory cell value is not 0.
  * Test cases
    * 👆🤛👆🤜
    * 🤛👆🤜
  * A
    * [Sequence involving 👆, 🤛, 👆, 🤜, and 👊]
  * B
    * [Sequence involving 🤛, 👆, 🤜, 👇, and 👊]