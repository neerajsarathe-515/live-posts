export interface IStocks {
  success: boolean;
  code: number;
  data?: {
      Details?: {
          data?: [
              {
                  obj: string;
                  sname: string;
                  qty: number;
                  cts: string;
                  uts: string;
                  txn_id: string;
                  tby: string
              }
          ],
          status: string
      }
  };
  message?: {
      errorMessage?: string
  }
}
