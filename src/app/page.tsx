import { Button } from '@/components/ui/button/button'

export default function Page() {
  return (
    <div className={'flex h-screen justify-center items-center gap-2'}>
      <Button variant={'outline'}>Task</Button>
      <Button variant={'contained'}>提交</Button>
    </div>
  )
}