function factI (n) {
for (x = n - 1; x > 0; x--)
{n = n * x}
return n;
}

function factR (n) {
if (n == 0)
{return 1;}
else
{return n * factR(n - 1);}
} 

function fibI (n) {
var first = 0; 
var second = 1;
var temp;
while (n >= 0)
{
temp = first;
first+= second;
second = temp;
n --;
}
return second; 
}

function fibR (n) {
if (n == 0)
{return 0;}
if (n <= 1)
{return 1;} 
return (fibR(n - 1) + fibR(n - 2));
} 