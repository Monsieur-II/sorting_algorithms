#include "sort.h"

/**
 * partition - divides and conquers
 * @arr: pointer to the array
 * @lb: the lower bound
 * @ub: the upper bound
 *
 * Return: position of pivot
 */
size_t partition(int *arr, size_t lb, size_t ub)
{
	size_t start = lb;
	size_t end = ub;
	int pivot = arr[lb];

	while (start < end)
	{
		while (arr[start] <= pivot)
			start++;

		while (arr[end] > pivot)
			end--;

		if (start < end)
			swap_int(&arr[start], &arr[end]);
	}
	swap_int(&arr[lb], &arr[end]);

	return (end);
}

/**
 * quick_sort - sorts an array of ints
 * @array: pointer to the array
 * @size: size of array
 *
 * Return: nothing
 */
void quick_sort(int *array, size_t size)
{
	size_t piv;

	if (size > 1)
	{
		piv = partition(array, 0, size - 1);
		quick_sort(array, piv);
		quick_sort(&array[piv + 1], size - (piv + 1));
	}
}
