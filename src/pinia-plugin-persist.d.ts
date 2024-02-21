declare module 'pinia-plugin-persist' {
    import { PiniaPlugin } from 'pinia'
    import { StoreDefinition } from 'pinia/dist/pinia'
  
    interface PersistOptions {
      /* 这里添加持久化选项的类型声明 */
    }
  
    export function createPersistState<T extends StoreDefinition>(
      options?: PersistOptions
    ): PiniaPlugin<T>
  }