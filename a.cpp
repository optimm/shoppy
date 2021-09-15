#include <bits/stdc++.h>
using namespace std;
struct node
{

    int data;
    node *next;
};
node *head = (struct node *)malloc(sizeof(node));

void insert_back(node *cur, int val)
{
    node *n = new node;
    if (cur == NULL)
    {
        cur = n;
        cur->data = val;
        head = n;
        return;
    }

    cur->next = n;
    cur->next->data = val;
    cur = cur->next;
}

int main()
{
    int n;

    cout << "enter the number of nodes" << endl;
    cin >> n;
    int val;
    node *cur;
    cout << "Enter the values to be inserted" << endl;
    for (int i = 0; i < n; i++)
    {

        cin >> val;
        insert_back(cur, val);
    }
    cout << head->data << endl;

    return 0;
}