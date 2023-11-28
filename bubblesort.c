#include "main.h"

void swap(char **ptr1, char **ptr2)
{
	char *temp = *ptr1;
	*ptr1 = *ptr2;
	*ptr2 = temp;
}

void sort(char **strings, int size)
{
	int i, j;
	int flag;

	for (i = 0; i < size - 1; i++)
	{
		flag = 0;
		for (j = 0; j < size - 1 - i; j++)
		{
			if (strcmp(strings[j], strings[j + 1]) > 0)
			{
				swap(&strings[j], &strings[j + 1]);
				flag = 1;
			}
		}
		if (!flag)
			break;
	}
}

int main(void)
{
	char *array[] = {"me", "mine", "hers"};
	int size = 3;
	int i;

	sort(array, size);
	for (i = 0; i < size; i++)
		printf("%s\n", array[i]);

	return (0);
}
