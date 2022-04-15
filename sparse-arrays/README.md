# Sparse Arrays

There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings.

For example, given input strings = ['ab', 'ab', 'abc'] and queries = ['ab', 'abc', 'bc'], we find 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, we add an element to our return array, results = [2,1,0].

Function Description Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:

strings - an array of strings to search
queries - an array of query strings

Input Format The first line contains and integer n, the size of strings. Each of the next n lines contains a string strings[i]. The next line contains q, the size of queries. Each of the next q lines contains a string q[i].

Constraints 
1 =< n =< 1000 

1 =< q =< 1000 

1 =< |strings[i], |queries[i] =< 20

Output Format

Return an integer array of the results of all queries in order.

Sample Input 1

                                                  4
        aba   baba   aba   xzxb                   aba
           Array:strings                          baba
                                                  aba 
                                                  xzxb                       
           .                                      3    
           aba    xzxb    ab                      aba
             Array: queries                       xzxb
                                                  ab  

Sample Output 1

    2
    1
    0

Explanation 1

Here, "aba" occurs twice, in the first and third string. The string "xzxb" occurs once in the fourth string, and "ab" does not occur at all.

Sample Input 2

                                                  3
            def   de   fgh                        def
             Array:strings                        de
                                                  fgh 
                                                  3                       
           .                                      de    
            de   lmn   fgh                        lmn
            Array: queries                        fgh

Sample Output 2

    1
    0
    1            

Sample Output 3

    abcde sdaklfj asdjf na basdn sdaklfj asdjf na asdjf na basdn sdaklfj asdjf          13
                                   Array: Strings                                       abcde
    .                                                                                   sdaklfj
    .                                                                                   asdjf
    .                                                                                   na
    .                                                                                   basdn
                         abcde   sdaklfj asdjf na basdn                                 sdaklfj
                                 Array: Strings                                         asdjf
    .                                                                                   na
    .                                                                                   asdjf
    .                                                                                   na
    .                                                                                   basdn
    .                                                                                   sdaklfj
    .                                                                                   asdjf
    .                                                                                   5
    .                                                                                   abcde
    .                                                                                   sdaklfj
    .                                                                                   asdjf
    .                                                                                   na
    .                                                                                   basdn



Sample Output 3

    1
    3
    4
    3
    2

                                                   






   

