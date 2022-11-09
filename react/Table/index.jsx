import React, { forwardRef } from 'react'
import cx from 'classnames'

import styles from './styles.styl'

export const Table = forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx(styles.Table, className)} {...props} />
})

Table.displayName = 'Table'

export const TableHead = forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cx(styles.TableHead, className)} {...props} />
  )
})

TableHead.displayName = 'TableHead'

export const TableBody = forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cx(styles.TableBody, className)} {...props} />
  )
})

TableBody.displayName = 'TableBody'

export const TableRow = forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx(styles.TableRow, className)} {...props} />
})

TableRow.displayName = 'TableRow'

export const TableCell = forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cx(styles.TableCell, className)} {...props} />
  )
})

TableCell.displayName = 'TableCell'

export const TableHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cx(styles.TableHeader, className)} {...props} />
  )
})

TableHeader.displayName = 'TableHeader'
