# Print the Elements of a Linked List

If you're new to linked lists, this is a great exercise for learning about them. Given a pointer to the head node of a linked list, print its elements in order, one element per line. If the head pointer is null (indicating the list is empty), don’t print anything.

Input Format

The first line of input contains n, the number of elements in the linked list. The next n lines contain one element each, which are the elements of the linked list.

Note: Do not read any input from stdin/console. Complete the printLinkedList function in the editor below.

Constraints
1 =< n =< 1000 
1 =< listi =< 1000, where listi is the ith element of the linked list.

Output Format Print the integer data for each element of the linked list to stdout/console (e.g.: using printf, cout, etc.). There should be one element per line.

Sample Input

    2 
    16 
    13

Sample Output 
    16 
    13

Explanation There are two elements in the linked list. They are represented as 16 -> 13 -> NULL. So, the printLinkedList function should print 16 and 13 each in a new line.