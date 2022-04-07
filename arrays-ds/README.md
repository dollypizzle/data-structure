# Array - Ds

An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, A, of size N, each memory location has some unique index, i (where 0 =< i < N), that can be referenced as A[i] (you may also see it written as Ai).

Given an array, A, of N integers, print each element in reverse order as a single line of space-separated integers.

Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

Input Format

The first line contains an integer, N (the number of integers in A). The second line contains N space-separated integers describing A.

Constraints 
1 =< N =< 10^3 

1 =< Ai =< 10^4, where Ai is the ith integer in A

Sample Input 1

        1    4    3    2                              4 
           Array:arr                                  1 4 3 2

Sample Output 1

    2 3 4 1