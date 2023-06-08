export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          at: number | null
          content: string | null
          created_at: string | null
          email: string | null
          id: number
          nickname: string
        }
        Insert: {
          at?: number | null
          content?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          nickname?: string
        }
        Update: {
          at?: number | null
          content?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          nickname?: string
        }
      }
      posts: {
        Row: {
          id: number
          love: number
          slug: string
          visit: number
        }
        Insert: {
          id?: number
          love?: number
          slug: string
          visit?: number
        }
        Update: {
          id?: number
          love?: number
          slug?: string
          visit?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increase_love: {
        Args: {
          id: number
        }
        Returns: undefined
      }
      increase_visit: {
        Args: {
          id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
