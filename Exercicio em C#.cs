using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var vet = new int[] { 5, 3, 4, 2, 1 };
            OrdenarPorSelecao(vet);


        }
        public static void OrdenarPorSelecao(int[] vet)
        {
            for (var i = 0; i < vet.Length - 1; i++)
            {
                int menor = i;
                for (var j = i + 1; j < vet.Length; j++)
                {
                    if (vet[j] < vet[menor])
                    {
                        menor = j;
                    }
                    Trocar(vet, i, menor);

                }
            }
        }
        private static void Trocar(int[] vet, int i, int j)
        {
            var aux = vet[i];
            vet[i] = vet[j];
            vet[j] = aux;
        }

    }

}
